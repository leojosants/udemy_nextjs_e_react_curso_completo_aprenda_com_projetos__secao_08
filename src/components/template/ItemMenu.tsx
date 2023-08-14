import Link from 'next/link';
import { ItemMenuProps } from '../interfaces/ItemMenuProps';

export default function ItemMenu(props: ItemMenuProps) {
    return (
        <li className={`hover:bg-gray-100`}>
            <Link href={props.url} legacyBehavior>
                <a className={`
                    flex 
                    flex-col 
                    justify-center 
                    items-center
                    h-20
                    w-20`}>

                    {props.icon}

                    <span className={`
                        text-xs
                        font-light
                        text-gray-600`}>

                        {props.text}

                    </span>
                </a>
            </Link>
        </li>
    );
};