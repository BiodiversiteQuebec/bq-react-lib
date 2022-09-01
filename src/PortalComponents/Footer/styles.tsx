import styled from "styled-components";
import { Grid, GridItem1 } from "../Common/Layouts";

export const FooterContainer = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.components.header.background};
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FooterGrid = styled(Grid)`
  max-height: 250px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media ${({ theme }) => theme.devices.tabletM} {
    max-height: 1000px;
  }
`;

export const GridItemFooterLeft = styled(GridItem1)`
  @media ${({ theme }) => theme.devices.tablet} {
    grid-template-columns: repeat(2, 1fr);
    grid-column: 1 / span 2;
    justify-content: center;
  }
`;

export const GridItemFooterRight = styled(GridItem1)`
  @media ${({ theme }) => theme.devices.tablet} {
    justify-content: center;
  }
`;
