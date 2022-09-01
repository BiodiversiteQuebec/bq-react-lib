import styled from "styled-components";

export const ResponsiveContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  gap: 50px;
  justify-content: space-around;
  align-items: center;
  width: 100%;

  &.item-wrapper {
    background: green;
  }

  @media ${({ theme }) => theme.devices.tablet} {
    flex-direction: column;
    gap: 10px;
    width: fit-content;
  }
`;
