/// <reference types="react" />
/**
 *
 */
interface SelectorProps {
    onValueChange: (value: any | undefined) => void;
    selectorId?: string;
    elementList?: Array<any>;
}
/**
 *
 * @param props
 * @returns
 */
export declare const GroupedSelect: (props: SelectorProps) => JSX.Element;
export {};
