import { IconHome, IconLogout, IconNotification, IconSettings } from '../icons';
import ItemMenu from './ItemMenu';
import Logo from './Logo';

export default function LateralMenu() {
    return (
        <aside className='
            flex
            flex-col'>

            <div className={`
                flex 
                flex-col
                items-center
                justify-center
                bg-gradient-to-r from-indigo-500 to-purple-800
                h-20
                w-20`}>

                <Logo />
            </div>

            <ul className='flex-grow'>
                <ItemMenu
                    url='/'
                    text='Início'
                    icon={IconHome} />

                <ItemMenu
                    url='/settings'
                    text='Ajustes'
                    icon={IconSettings} />

                <ItemMenu
                    url='/notifications'
                    text='Notificações'
                    icon={IconNotification} />
            </ul>

            <ul>
                <ItemMenu
                    text='Sair'
                    icon={IconLogout}
                    onClick={() => console.log('logout')}
                    className={`
                        text-red-600
                        hover:bg-red-400
                        hover:text-white`} />
            </ul>
        </aside>
    );
};