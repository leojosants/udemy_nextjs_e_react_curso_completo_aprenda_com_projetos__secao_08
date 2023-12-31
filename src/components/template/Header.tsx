import useAppData from '@/src/data/hook/useAppData';
import ButtonChangeTheme from './ToggleThemeButton';
import { HeaderProps } from '../interfaces/HeaderProps';
import Title from './Title';
import UserAvatar from './UserAvatar';

export default function Header(props: HeaderProps) {
    const { theme, changeTheme } = useAppData();

    return (
        <div className={`flex`}>
            <Title
                title={props.title}
                subtitle={props.subtitle}
            />

            <div
                className={`
                    flex
                    flex-grow
                    justify-end
                    items-center
                `}
            >

                {
                    changeTheme &&
                    (
                        <ButtonChangeTheme
                            theme={theme ?? ''}
                            toggleTheme={changeTheme}
                        />
                    )
                }

                <UserAvatar className='ml-3' />
            </div>
        </div>
    );
};