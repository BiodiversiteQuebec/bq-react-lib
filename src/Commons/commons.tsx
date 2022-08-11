import styled from 'styled-components';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { colors } from '../styles';

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 15px;
`;

export const Title = styled.div`
  width: 100%;
  padding: 0.5em 1em;
  font-weight: bold;
  font-size: 1.3em;
  font-family: Lato;
  color: ${colors.darkgray};
`;

export const TextBlock = styled.div`
  width: 100%;
  padding: 0.5em 1em;
  font-size: 1em;
  font-family: Lato;
  color: ${colors.darkgray};
`;

export const Spiner = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
