import { LayoutProps } from '../interfaces/LayoutProps';
import Content from './Content';
import Header from './Header';
import LateralMenu from './LateralMenu';

export default function Layout(props: LayoutProps) {
    return (
        <div className={`
            dark
            flex
            h-screen
            w-screen`}>

            <LateralMenu />

            <div className={`
                flex
                flex-col
                w-full
                p-7
                bg-gray-300
                dark:bg-gray-800`}>

                <Header
                    title={props.title}
                    subtitle={props.subtitle} />

                <Content>
                    {props.children}
                </Content>
            </div>
        </div>
    );
};