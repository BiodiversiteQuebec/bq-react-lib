/// <reference types="react" />
interface Item {
    text?: string;
    key?: string;
    href?: string;
    disbaleCollapse?: boolean;
    subitem?: any;
    color?: string;
}
interface BQHeaderItemsProps {
    items?: Item[];
    activeItem?: string;
    settedKey?: string;
    tabClicked?: string;
    locale?: string;
    selectedTab?: (key: string) => any;
}
export declare const BQHeaderItems: (props: BQHeaderItemsProps) => JSX.Element;
export {};
