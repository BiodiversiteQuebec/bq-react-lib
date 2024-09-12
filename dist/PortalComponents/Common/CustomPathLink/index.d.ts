import { ReactNode } from 'react';
/**
 * Props
 */
export interface Props {
    /**
     * href
     */
    href: string;
    /**
     * children
     */
    children: ReactNode;
    /**
     * className
     */
    className?: string;
}
/**
 *
 * @param props text for error
 * @returns Error Text component
 */
export declare const CustomPathLink: (props: Props) => JSX.Element;
