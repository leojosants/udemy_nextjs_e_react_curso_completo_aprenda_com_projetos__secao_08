import User from "@/src/model/UserModel";

export interface AuthContextProps {
    user?: User;
    loading?: boolean;
    loginGoogle?: () => Promise<void>;
    logout?: () => Promise<void>;
};