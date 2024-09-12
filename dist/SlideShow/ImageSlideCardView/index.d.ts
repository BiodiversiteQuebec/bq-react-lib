/// <reference types="react" />
import '../ImageSlideCard';
/**
 *
 */
interface Card {
    /**
     *
     */
    title?: string;
    /**
     *
     */
    subtitle?: string;
    /**
     *
     */
    leftText?: string;
    /**
     *
     */
    rightText?: string;
}
interface Image {
    /**
     *
     */
    url: string;
    /**
     *
     */
    thumburl: string;
    /**
     *
     */
    width: number;
    /**
     *
     */
    height: number;
    /**
     *
     */
    name: string;
}
/**
 *
 */
interface Props {
    /**
     *
     */
    card?: Card;
    /**
     *
     */
    image: Image;
    /**
     *
     */
    searchBtn?: any;
    /**
     *
     */
    activeModal: boolean;
}
/**
 *
 * @param props
 */
export declare const ImageSlideCardView: (props: Props) => JSX.Element;
export {};
