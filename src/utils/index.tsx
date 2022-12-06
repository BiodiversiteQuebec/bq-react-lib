export const defaultTranslationFn = (text: string) => text;

/**
 * create a position object with the provided values
 * @param locationClass
 * @param top
 * @param right
 * @param left
 * @param bottom
 */
export const buildLocation = (
  locationClass: string,
  top = 0,
  right = 0,
  left = 0,
  bottom = 0
) => {
  if (locationClass === 'bottom-left')
    return { bottom: `${bottom}px`, left: `${left}px` };
  if (locationClass === 'bottom-right')
    return { right: `${right}px`, bottom: `${bottom}px` };
  if (locationClass === 'top-right')
    return { right: `${right}px`, top: `${top}px` };
  if (locationClass === 'top-left')
    return { left: `${left}px`, top: `${top}px` };

  return {};
};
