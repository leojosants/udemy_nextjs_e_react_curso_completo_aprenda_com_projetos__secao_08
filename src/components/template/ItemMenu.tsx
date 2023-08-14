import { ItemMenuProps } from "../interfaces/ItemMenuProps";

export default function ItemMenu(props: ItemMenuProps) {
    return (
        <li className={``}>
            {props.icon}
        </li>
    );
};