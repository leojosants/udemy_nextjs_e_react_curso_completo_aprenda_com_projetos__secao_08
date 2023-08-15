import useAppData from '@/src/data/hook/useAppData';
import ButtonChangeTheme from './ToggleThemeButton';
import { HeaderProps } from '../interfaces/HeaderProps';
import Title from './Title';

export default function Header(props: HeaderProps) {
    const { theme, changeTheme } = useAppData();

    return (
        <div className={`flex`}>
            <Title
                title={props.title}
                subtitle={props.subtitle} />

            <div
                className={`
                    flex
                    flex-grow
                    justify-end`}>

                {
                    changeTheme && (
                        <ButtonChangeTheme
                            theme={theme ?? ''}
                            toggleTheme={changeTheme} />
                    )
                }
            </div>
        </div>
    );
};