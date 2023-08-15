import { IconSun } from '../icons';
import { ThemeToggleButtonProps } from '../interfaces/ThemeToggleButtonProps';
export default function ToggleThemeButton(props: ThemeToggleButtonProps) {
    return (
        props.theme === 'dark' ?
            (
                <div
                    onClick={props.toggleTheme}
                    className={``}>

                    <div className={``}>
                        {IconSun}
                    </div>

                    <div className={``}>
                        <span>Claro</span>
                    </div>
                </div>
            ) : (
                <div></div>
            )
    );
};