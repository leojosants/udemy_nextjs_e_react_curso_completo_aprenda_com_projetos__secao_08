import { Theme } from "../types/themeType";

export interface AppContextProps {
    theme?: string;
    changeTheme?: () => void;
};