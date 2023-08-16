import { createContext, useState, useEffect } from 'react';
import { AppContextProps } from './interfaces/AppContextProps';
// import { Theme } from './types/themeType';

const AppContext = createContext<AppContextProps>({});

export function AppProvider(props: any) {
    const [theme, setTheme] = useState('dark');

    function changeTheme() {
        const newTheme = theme === '' ? 'dark' : '';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    };

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        setTheme(savedTheme);
    }, []);

    return (
        <AppContext.Provider value={{ theme, changeTheme }}>
            {props.children}
        </AppContext.Provider>
    );
};

export default AppContext;