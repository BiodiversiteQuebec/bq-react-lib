/// <reference types="react" />
/**
 * Component props
 */
interface BQDrawerProps {
    t?: (text: string) => string;
    drawerContent?: JSX.Element;
    tabs: Array<any>;
    setDrawerOpen: (value: boolean) => void;
    drawerOpen: boolean;
    setSelectedTab: (value: number) => void;
    selectedTab: number;
}
/**
 *
 * @param props
 * @returns
 */
export declare const BQDrawer: (props: BQDrawerProps) => JSX.Element;
export {};
