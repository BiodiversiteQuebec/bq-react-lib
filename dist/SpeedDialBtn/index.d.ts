/// <reference types="react" />
import './speeddialbtn.css';
interface SpeedDialBtnProps {
    location: string;
    top?: number;
    bottom?: number;
    left?: number;
    right?: number;
    direction: any;
    onClickSwitch: (text: string) => void;
    t: (text: string) => string;
    language: any;
    changeLanguage: (value: any) => any;
}
export declare const SpeedDialBtn: (props: SpeedDialBtnProps) => JSX.Element;
export {};
