import useAuth from "@/src/data/hook/useAuth";
import Link from "next/link";
import { UserAvatarProps } from "../interfaces/UserAvatarProps";

export default function UserAvatar(props: UserAvatarProps) {
    const { user } = useAuth();

    return (
        <Link href='/profile'>
            <img
                src={user?.imageUrl ?? '/images/avatar.svg'}
                alt='Avatar do Usuário'
                className={`
                    h-10
                    w-10
                    rounded-full
                    cursor-pointer
                    ${props.className}
                `}
            />
        </Link>
    );
};