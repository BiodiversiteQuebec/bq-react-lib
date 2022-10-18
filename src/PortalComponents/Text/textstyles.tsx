import styled from 'styled-components';

export const Text: any = styled.span`
  color: ${({ theme }) => theme.components.text.basic.menu.color};
  line-height: ${({ theme }) => `${theme.components.text.basic.lineHeight}rem`};
  letter-spacing: ${({ theme }) =>
    `${theme.components.text.basic.letterSpacing}px`};
  font-family: ${({ theme }) =>
    theme.components.text.basic.font}; // "Lato", sans-serif;
  font-weight: ${({ theme }) => theme.components.text.basic.fontWeight};
  font-size: ${({ theme }) => `${theme.components.text.basic.fontSize}rem`};
`;

export const TextItalic = styled(Text)`
  font-style: italic;
`;

export const TitleText = styled(Text)`
  color: ${({ theme }) => theme.components.text.title.menu.color};
  line-height: ${({ theme }) => `${theme.components.text.title.lineHeight}rem`};
  letter-spacing: ${({ theme }) =>
    `${theme.components.text.title.letterSpacing}px`};
  font-family: ${({ theme }) =>
    theme.components.text.title.font}; // "Lato", sans-serif;
  font-weight: ${({ theme }) => theme.components.text.title.fontWeight};
  font-size: ${({ theme }) => `${theme.components.text.title.fontSize}rem`};
`;
export const TitleExtraLarge = styled(TitleText)`
  font-size: 64px;
  font-family: ${({ theme }) => theme.fonts.roboto};
  font-weight: 700;
`;

export const Titletalic = styled(TitleText)`
  font-style: italic;
`;

export const SubTitleText = styled(Text)`
  line-height: ${({ theme }) =>
    `${theme.components.text.subtitle.lineHeight}rem`};
  letter-spacing: ${({ theme }) =>
    `${theme.components.text.subtitle.letterSpacing}px`};
  font-family: ${({ theme }) => theme.components.text.subtitle.font};
  font-weight: ${({ theme }) => theme.components.text.subtitle.fontWeight};
  font-size: ${({ theme }) => `${theme.components.text.subtitle.fontSize}rem`};
`;

export const TextGray: any = styled(Text)`
  color: #c3c3c3;
`;

export const MenuText = styled(TextGray)`
  font-size: ${({ theme }) => `${theme.fontSize.normal}rem`}; ;
`;

export const TitleExtraLargeWhiteTheme = styled(TitleExtraLarge)`
  color: ${({ theme }) => theme.colors.black};
`;

export const TitleTextWhiteTheme = styled(TitleText)`
  color: ${({ theme }) => theme.colors.black};
`;

export const SubTitleTextWhiteTheme = styled(SubTitleText)`
  color: ${({ theme }) => theme.colors.black};
`;

export const TextWhiteTheme = styled(Text)`
  color: ${({ theme }) => theme.colors.black};
`;
