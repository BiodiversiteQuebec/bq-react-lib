/// <reference types="react" />
interface BottomNavBarItem {
    label: string;
    icon: any;
}
interface BottomNavBarProps {
    onValueChange: (newValue: number) => void;
    items: Array<BottomNavBarItem>;
    t: (text: string) => string;
}
/**
 *
 * @param props properties
 * @returns component
 */
export declare const BottomNavBar: (props: BottomNavBarProps) => JSX.Element;
export {};
