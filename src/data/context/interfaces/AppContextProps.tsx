import { Theme } from "../types/themeType";

export interface AppContextProps {
    theme?: Theme;
    switchTheme?: () => void;
};