export declare const defaultTranslationFn: (text: string) => string;
/**
 * create a position object with the provided values
 * @param locationClass
 * @param top
 * @param right
 * @param left
 * @param bottom
 */
export declare const buildLocation: (locationClass: string, top?: number, right?: number, left?: number, bottom?: number) => {
    bottom: string;
    left: string;
    right?: undefined;
    top?: undefined;
} | {
    right: string;
    bottom: string;
    left?: undefined;
    top?: undefined;
} | {
    right: string;
    top: string;
    bottom?: undefined;
    left?: undefined;
} | {
    left: string;
    top: string;
    bottom?: undefined;
    right?: undefined;
} | {
    bottom?: undefined;
    left?: undefined;
    right?: undefined;
    top?: undefined;
};
