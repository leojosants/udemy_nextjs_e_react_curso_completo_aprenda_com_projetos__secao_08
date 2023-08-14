import Link from 'next/link';
import { ItemMenuProps } from '../interfaces/ItemMenuProps';

export default function ItemMenu(props: ItemMenuProps) {
    function renderLink() {
        return (
            <a className={`
                flex 
                flex-col 
                justify-center 
                items-center
                h-20
                w-20
                text-gray-600
                ${props.className}`}>

                {props.icon}

                <span className={`
                        text-xs
                        font-light`}>

                    {props.text}

                </span>
            </a>
        );
    };

    return (
        <li
            className={`
                hover: bg-gray-100
                cursor-pointer`}

            onClick={props.onClick}>

            {
                props.url ? (
                    <Link href={props.url} legacyBehavior>
                        {renderLink()}
                    </Link>
                ) : (
                    renderLink()
                )
            }
        </li>
    );
};