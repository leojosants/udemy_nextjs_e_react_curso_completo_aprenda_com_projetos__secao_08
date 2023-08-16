import User from "@/src/model/UserModel";

export interface AuthContextProps {
    user?: User;
    loading?: boolean;
    register?: (email: string, password: string) => Promise<void>;
    login?: (email: string, password: string) => Promise<void>;
    loginGoogle?: () => Promise<void>;
    logout?: () => Promise<void>;
};