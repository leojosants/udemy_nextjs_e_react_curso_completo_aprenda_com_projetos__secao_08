import User from "@/src/model/UserModel";

export interface AuthContextProps {
    user?: User;
    loginGoogle?: () => Promise<void>;
    logout?: () => Promise<void>;
};