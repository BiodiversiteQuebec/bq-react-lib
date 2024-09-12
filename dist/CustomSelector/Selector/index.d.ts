/// <reference types="react" />
interface SelectorProps {
    onValueChange: (value: any | undefined) => void;
    selectorId?: string;
    selectorList?: Array<any>;
    value: string;
    t: (text: string) => string;
    onFocusout?: boolean;
}
/**
 *
 * @param props
 */
export declare const Selector: (props: SelectorProps) => JSX.Element;
export {};
