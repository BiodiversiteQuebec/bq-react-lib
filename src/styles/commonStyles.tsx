import styled from "styled-components";

export const HeroContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${({ theme }) => theme.devices.tablet} {
    flex-direction: column;
    width: 100%;
  }
`;
