import React from 'react';
declare const ModeContext: React.Context<{
    mode: string;
    themes: {};
    currentTheme: {};
}>;
interface ContextProps {
    mode?: string;
    themes?: any;
    children: any;
    currentTheme?: any;
}
export declare const AppModeProvider: (props: ContextProps) => JSX.Element;
export default ModeContext;
