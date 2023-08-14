import { IconHome, IconNotification, IconSettings } from '../icons';
import ItemMenu from './ItemMenu';

export default function LateralMenu() {
    return (
        <aside>
            <ul>
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
        </aside>
    );
};