import route from 'next/router'
import { createContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import firebase from '../../firebase/config';
import { AuthContextProps } from './interfaces/AuthContextProps';
import User from '@/src/model/UserModel';

const AuthContext = createContext<AuthContextProps>({});

async function normalizedUser(firebaseUser: firebase.User): Promise<User> {
    const token = await firebaseUser.getIdToken();

    return {
        uid: firebaseUser.uid,
        name: firebaseUser.displayName,
        email: firebaseUser.email,
        token,
        provider: firebaseUser.providerData[0].providerId,
        imageUrl: firebaseUser.photoURL,
    };
};

function managerCookie(logged: boolean) {
    if (logged) {
        Cookies.set('admin-template-udemy-auth', logged, { expires: 7 });
    } else {
        Cookies.remove('admin-template-udemy-auth');
    }
};

export function AuthProvider(props: any) {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState<User>(null);

    async function configureSession(firebaseUser) {
        if (firebaseUser?.email) {
            const user = await normalizedUser(firebaseUser);

            setUser(user);
            managerCookie(true);
            setLoading(false);

            return user.email;
        }
        else {
            setUser(null);
            managerCookie(false);
            setLoading(false);

            return false;
        }
    };

    async function loginGoogle() {
        const resp = await firebase.auth().signInWithPopup(
            new firebase.auth.GoogleAuthProvider()
        );

        configureSession(resp.user);
        route.push('/');
    };

    useEffect(() => {
        const cancel = firebase.auth().onIdTokenChanged(configureSession);
        return () => cancel();
    }, []);

    return (
        <AuthContext.Provider value={{ user, loginGoogle }}>
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthContext;