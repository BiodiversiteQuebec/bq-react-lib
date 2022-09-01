import styled from "styled-components";

export const FooterLeftContentContainer = styled.div`
  display: flex;
  position: relative;
  justify-content: flex-end;
  align-items: center;
  height: 200px;

  & .block {
    display: flex;
    position: relative;
    flex-direction: column;
    width: fit-content;
    height: 100%;
  }

  @media ${({ theme }) => theme.devices.tablet} {
    justify-content: flex-start;
    max-height: 200px;
  }
`;

export const FooterImg = styled.img`
  min-width: 300px;
  max-width: 400px;
  max-height: 400px;
  width: 100%;

  @media ${({ theme }) => theme.devices.mobileL} {
    height: fit-content;
    max-width: 400px;
  }
`;

/* export const FooterImgDiv = styled.div<Props>`
  background: url(${({ theme }) =>
      theme.mode === "dark"
        ? "/images/logofooter-dark-mode-fr.png"
        : "/images/logofooter-light-mode-fr.png"})
    no-repeat;

  background-size: 155%;
  background-position: center;
  min-width: 300px;
  max-width: 400px;
  max-height: 400px;
  height: 100%;

  @media ${({ theme }) => theme.devices.tablet} {
    width: 250px;
    min-width: 0px;
    height: 150px;
  }
`;


interface Props {
  theme?: any;
} */
