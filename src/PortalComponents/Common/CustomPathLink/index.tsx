import React, { ReactNode } from 'react';

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
export const CustomPathLink = (props: Props) => {
  return (
    <a href={`${props.href}`} className={props.className}>
      {props.children}
    </a>
  );
};
