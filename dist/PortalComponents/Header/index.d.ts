/// <reference types="react" />
export declare const HeaderNavItem: (props: any) => any;
interface HeaderProps {
    links?: any;
    children?: any;
    activeItem?: string;
    defaultActiveKey?: string;
    logo?: any;
    onBlur?: any;
    rightSideComponents?: any;
}
export declare const Header: ({ children, activeItem, onBlur, logo, rightSideComponents, }: HeaderProps) => JSX.Element;
export declare const CustomHeader: ({ t, tabCardsLists, items, logoUrl, rightSideComponents, activePage, }: any) => JSX.Element;
export declare const BQHeaderWithoutProvider: (props: any) => JSX.Element;
export {};
