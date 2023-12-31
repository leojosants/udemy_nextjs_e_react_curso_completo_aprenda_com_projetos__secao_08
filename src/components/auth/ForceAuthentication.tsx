import Head from 'next/head';
import Image from 'next/image';
import loadingGif from '../../../public/images/loading.gif';
import useAuth from '@/src/data/hook/useAuth';
import { useRouter } from 'next/router';

export default function ForceAuthentication(props: any) {
    const router = useRouter();

    const { user, loading } = useAuth();

    function renderContent() {
        return (
            <>
                <Head >
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `
                                if(!document.cookie?.includes('admin-template-udemy-auth=true')) {
                                    window.location.href = '/authentication';
                                }
                            `
                        }}
                    ></script>
                </Head>

                {props.children}
            </>
        );
    };

    function renderLoading() {
        return (
            <div className={`
                flex
                justify-center
                items-center
                h-screen
            `}>
                <Image src={loadingGif} alt='Imagem de carregando dados' />

            </div>
        );
    };

    if (!loading && user?.email) {
        return renderContent();
    } else if (loading) {
        return renderLoading();
    } else {
        router.push('/authentication');
        return null;
    }
};