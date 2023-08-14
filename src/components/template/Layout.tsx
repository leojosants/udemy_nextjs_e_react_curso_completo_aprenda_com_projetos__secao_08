import { LayoutProps } from '../interfaces/LayoutProps';
import Content from './Content';
import Header from './Header';
import LateralMenu from './LateralMenu';

export default function Layout(props: LayoutProps) {
    return (
        <div>
            <LateralMenu />

            <Header
                title={props.title}
                subtitle={props.subtitle}
            />

            <Content>
                {props.children}
            </Content>
        </div>
    );
};