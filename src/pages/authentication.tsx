import { useState } from 'react';
import AuthInput from '../components/auth/AuthInput';

export default function Authentication() {
    const [modo, setModo] = useState<'login' | 'register'>('login');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className='flex flex-col'>
            <h1>Autenticação</h1>

            <AuthInput
                label='E-mail'
                type='email'
                value={email}
                changeValue={setEmail}
                required />

            <AuthInput
                label='Senha'
                type='password'
                value={password}
                changeValue={setPassword}
                required />
        </div>
    );
};