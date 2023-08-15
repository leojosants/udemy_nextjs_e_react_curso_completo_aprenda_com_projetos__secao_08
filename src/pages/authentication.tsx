import { useState } from 'react';
import AuthInput from '../components/auth/AuthInput';
import { IconGoogle } from '../components/icons';

export default function Authentication() {
    const [modo, setModo] = useState<'login' | 'register'>('login');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function submit() {
        if (modo === 'login') {
            console.log('login');
        } else {
            console.log('cadastrar');
        }
    };

    return (
        <div className='
            flex
            flex-col
            h-screen
            items-center
            justify-center'
        >

            <div className='w-1/2'>
                <h1 className={`
                    text-xl
                    font-bold
                    mb-5
                `}>

                    {
                        modo === 'login'
                            ? 'Entre com a Sua Conta'
                            : 'Cadastre-se na Plataforma'
                    }
                </h1>

                <AuthInput
                    label='E-mail'
                    type='email'
                    value={email}
                    changeValue={setEmail}
                    required
                />

                <AuthInput
                    label='Senha'
                    type='password'
                    value={password}
                    changeValue={setPassword}
                    required
                />

                <button onClick={submit}
                    className={`
                        w-full
                        bg-indigo-500
                        hover:bg-indigo-400
                        text-white
                        rounded-lg
                        px-4
                        py-3
                        mt-6
                    `}>

                    {
                        modo === 'login' ? 'Entrar' : 'Cadastrar'
                    }
                </button>

                <hr className={`
                    my-6
                    border-gray-300
                    w-full
                `} />

                <button onClick={submit}
                    className={`
                        w-full
                        bg-red-500
                        hover:bg-red-400
                        text-white
                        rounded-lg
                        px-4
                        py-3
                    `}
                >

                    {
                        IconGoogle(3)
                    }

                    Entrar com Google
                </button>
            </div>
        </div>
    );
};