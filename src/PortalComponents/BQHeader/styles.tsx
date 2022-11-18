import styled from 'styled-components';

export const BQHeaderContainer = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  width: 100%;
  background: ${({ theme }) => theme.components.header.background};
  color: ${({ theme }) => theme.components.text.menu.color};
  padding: 0 5%;
  height: 50px;
  margin-left: calc((100vw - 1500px) / 2);
  @media (max-width: 1500px) {
    margin-left: 10px;
  }

  & a {
    text-decoration: none;
    color: inherit;
    height: 100%;
    display: flex;
    align-items: center;

    padding: 0 0.25rem;
    @media ${({ theme }) => theme.devices.gttv} {
      padding: 1rem 0.25rem;
    }
  }
`;
