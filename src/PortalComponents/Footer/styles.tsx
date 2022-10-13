import styled from 'styled-components';
import { Grid, GridItem1 } from '../Common/Layouts';

export const FooterContainer = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.components.header.background};
  padding: 20px;
  display: flex;
  justify-content: center;
`;

export const FooterGrid = styled(Grid)`
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media ${({ theme }) => theme.devices.tabletM} {
    max-height: 1000px;
  }

  @media ${({ theme }) => theme.devices.gttv} {
    max-width: 2500px;
    padding: 20px 0;
  }
`;

export const GridItemFooterLeft = styled(GridItem1)`
  justify-content: center;
  @media ${({ theme }) => theme.devices.tablet} {
    grid-template-columns: repeat(2, 1fr);
    grid-column: 1 / span 2;
    justify-content: center;
  }
`;

export const GridItemFooterRight = styled(GridItem1)`
  align-self: start;
  margin-bottom: 0;
  margin: 0;
  padding-top: 30px;
  padding-bottom: 0;

  @media ${({ theme }) => theme.devices.tablet} {
    justify-content: center;
  }
`;
