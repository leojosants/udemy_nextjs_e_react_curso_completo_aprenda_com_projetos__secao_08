import { createContext } from 'react';
import { AppContextProtocol } from '../interfaces/AppContextProtocol';

const AppContext = createContext<AppContextProtocol>({ name: null });

export function AppProvider(props: any) {
    return (
        <AppContext.Provider value={{ name: 'Teste Context API' }}>
            {props.chidren}
        </AppContext.Provider>
    );
};

export default AppContext;
export const AppConsumer = AppContext.Consumer;