import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const CustomFontAwesomeIcon: any = styled(FontAwesomeIcon)`
  padding-top: 1.3px;
  color: ${({ theme }) => theme.components.text.menu.color};
  line-height: ${({ theme }) => `${theme.components.text.basic.lineHeight}rem`};
  letter-spacing: ${({ theme }) =>
    `${theme.components.text.basic.letterSpacing}px`};
  font-family: ${({ theme }) => theme.components.text.basic.font};
  font-weight: ${({ theme }) => theme.components.text.basic.fontWeight};
  font-size: ${({ theme }) => `${theme.fontSize.small}rem`};
  font-style: ${({ theme }) => theme.components.text.basic.fontStyle};

  &:hover {
    cursor: pointer;
  }
`;
