import { createContext } from 'react';
import { AppContextProtocol } from '../interfaces/AppContextProtocol';

const AppContext = createContext<AppContextProtocol>({ name: null });

export function AppProvider(props: any) {
    return (
        <AppContext.Provider value={{ name: 'Teste Context API' }}>
            {props.children}
        </AppContext.Provider>
    );
};

export default AppContext;