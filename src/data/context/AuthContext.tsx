import route from 'next/router'
import { createContext, useState } from 'react';
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

export function AuthProvider(props: any) {
    const [user, setUser] = useState<User>(null);

    async function loginGoogle() {
        const resp = await firebase.auth().signInWithPopup(
            new firebase.auth.GoogleAuthProvider()
        );

        if (resp.user?.email) {
            const user = await normalizedUser(resp.user);
            setUser(user);
            route.push('/');
        }
    };

    return (
        <AuthContext.Provider value={{ user, loginGoogle }}>
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthContext;