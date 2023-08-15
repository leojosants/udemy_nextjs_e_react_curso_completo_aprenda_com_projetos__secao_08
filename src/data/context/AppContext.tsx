import { createContext, useState } from 'react';
import { AppContextProps } from './interfaces/AppContextProps';
import { Theme } from './types/themeType';

const AppContext = createContext<AppContextProps>({});

export function AppProvider(props: any) {
    const [theme, setTheme] = useState<Theme>('dark');

    function changeTheme() {
        setTheme(theme === '' ? 'dark' : '');
    };

    return (
        <AppContext.Provider
            value={{
                theme,
                changeTheme
            }}>

            {props.children}

        </AppContext.Provider>
    );
};

export default AppContext;