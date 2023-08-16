import { useState } from 'react';
import AuthInput from '../components/auth/AuthInput';
import { IconGoogle, IconWarning } from '../components/icons';
import useAuth from '../data/hook/useAuth';

export default function Authentication() {
    const { user, loginGoogle } = useAuth();

    const [error, setError] = useState(null);
    const [modo, setModo] = useState<'login' | 'register'>('login');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function showError(msg: any, timeInSeconds = 5) {
        setError(msg);
        setTimeout(() => setError(null), timeInSeconds * 1000);

    };

    function submit() {
        if (modo === 'login') {
            console.log('login');
            showError('Ocorreu um erro no login!');
        } else {
            console.log('cadastrar');
            showError('Ocorreu um erro no cadastro');
        }
    };

    return (
        <div className='
            flex
            h-screen
            items-center
            justify-center
        '>
            <div className='
                hidden
                md:block
                md:w-1/2
                lg:w-2/3
            '>
                <img
                    src='https://source.unsplash.com/random'
                    alt='Imagem da Tela de Autenticação'
                    className='h-screen w-full object-cover'
                />
            </div>

            <div className='
                m-10
                w-full
                md:w-1/2
                lg:w-1/3
            '>
                <h1 className={`
                    text-3xl
                    font-bold
                    mb-5
                `}>
                    {
                        modo === 'login'
                            ? 'Entre com a Sua Conta'
                            : 'Cadastre-se na Plataforma'
                    }
                </h1>

                {
                    error
                        ? (
                            <div className={`
                                flex
                                items-center
                                bg-red-400
                                text-white
                                py-3
                                px-5
                                my-2
                                border
                                border-red-700
                                rounded-lg
                            `}>

                                {IconWarning()}

                                <span className='ml-3'>{error}</span>
                            </div>
                        )
                        : false
                }

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
                    `}
                >
                    {
                        modo === 'login'
                            ? 'Entrar'
                            : 'Cadastrar'
                    }
                </button>

                <hr className={`
                    my-6
                    border-gray-300
                    w-full
                `} />

                <button onClick={loginGoogle}
                    className={`
                        flex
                        items-center
                        justify-center
                        w-full
                        bg-red-500
                        hover:bg-red-400
                        text-white
                        rounded-lg
                        px-4
                        py-3
                    `}
                >

                    {IconGoogle()}

                    Entrar com Google
                </button>

                {
                    modo === 'login'
                        ? (
                            <p className='
                                mt-8
                                text-center
                            '>

                                Novo por aqui? &nbsp;

                                <a onClick={() => setModo('register')}
                                    className={`
                                        text-blue-500
                                        hover:text-blue-700
                                        font-semibold
                                        cursor-pointer`}
                                >
                                    Crie uma Conta Gratuitamente.
                                </a>
                            </p>
                        )
                        : (
                            <p className='
                                mt-8
                                text-center
                            '>

                                Já faz parte da nossa comunidade? &nbsp;

                                <a onClick={() => setModo('login')}
                                    className={`
                                        text-blue-500 
                                        hover:text-blue-700
                                        font-semibold
                                        cursor-pointer
                                    `}
                                >
                                    Entre com as suas credenciais.
                                </a>
                            </p>
                        )
                }
            </div>
        </div>
    );
};