import { HeaderProps } from '../interfaces/HeaderProps';
import Title from './Title';

export default function Header(props: HeaderProps) {
    return (
        <div>
            <Title
                title={props.title}
                subtitle={props.subtitle}
            />
        </div>
    );
};