import styled from "styled-components";

export const InfoContentContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100%;
  width: fit-content;

  color: ${({ theme }) => theme.components.text.basic.menu.color};
  line-height: ${({ theme }) => `${theme.components.text.basic.lineHeight}rem`};
  letter-spacing: ${({ theme }) =>
    `${theme.components.text.basic.letterSpacing}px`};
  font-family: ${({ theme }) =>
    theme.components.text.basic.font}; // "Lato", sans-serif;
  font-weight: ${({ theme }) => theme.components.text.basic.fontWeight};
  font-size: ${({ theme }) => `${theme.fontSize.small}rem`};
  font-style: ${({ theme }) => theme.components.text.basic.fontStyle};

  & ul {
    list-style-type: none;
    margin: 1em 0;
    padding: 0;

    & li {
      margin: 5px;
    }

    & a {
      text-decoration: none;
      color: ${({ theme }) => theme.components.text.menu.color};
    }
  }
  @media ${({ theme }) => theme.devices.mobileL} {
    padding: 0;

    justify-content: center;
    align-items: flex-start;
  }
`;

export const Icons = styled.img`
  width: 20px;
  height: 20px;
`;
