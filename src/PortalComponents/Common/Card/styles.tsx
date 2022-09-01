import styled from 'styled-components';
import Card from 'react-bootstrap/Card';
import { Text, SubTitleText } from '../../Text/textstyles';

export const CustomCard = styled(Card)`
  cursor: pointer;
  width: 250px;
  height: 250px;
`;

export const CardBody = styled(Card.Body)`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 17px;

  /* or 140% */
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  letter-spacing: 0.350347px;
  color: rgba(0, 0, 0, 0.6);
`;

export const CardBodyGrid = styled.div`
  width: 100%;
  display: grid;
  gap: 10px;
  align-items: center;
  grid-auto-rows: auto;
  grid-template-columns: repeat(2, 1fr);
  padding: 10px;

  .body-descr-2 {
    width: 100%;
    display: flex;
  }
  .body-descr-3 {
    grid-column: 1 / span 2;
  }
`;

export const CardTitleText = styled(Text)`
  color: ${({ theme }) => theme.colors.darkv1};
  font-weight: 600;
  font-size: 14px;
`;

export const CardDescriptionText = styled(SubTitleText)`
  color: ${({ theme }) => theme.colors.darkv1};
  margin-top: 10px;
`;
