/// <reference types="react" />
interface CardContent {
    mediasrc?: string;
    category?: string;
    title?: string;
    tag?: string;
}
interface ContentCardProps {
    card?: CardContent;
}
export declare const ContentCard: (props: ContentCardProps) => JSX.Element | null;
export {};
