import { AuthInputProps } from "../interfaces/AuthInputProps";

export default function AuthInput(props: AuthInputProps) {
    return (
        props.doNotRenderWhen
            ? null
            : (
                <div>
                    <label>
                        {props.label}
                    </label>

                    <input
                        type={props.type ?? 'text'}
                        value={props.value}
                        onChange={e => props.changeValue?.(e.target.value)}
                        required={props.required} />
                </div>
            )
    );
};