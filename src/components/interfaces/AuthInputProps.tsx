export interface AuthInputProps {
    label: string;
    value: any;
    required?: boolean;
    doNotRenderWhen?: boolean;
    type?: 'text' | 'email' | 'password';
    changeValue: (newValue: any) => void;
};