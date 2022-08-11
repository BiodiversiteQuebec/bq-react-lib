import styled from 'styled-components';
import { colors } from '../styles';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 15px;
`;

export const Spiner = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
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

export const Item = styled(Paper)(() => ({
  backgroundColor: '#fff',
  padding: '8px',
  width: '100%',
}));

export const SelectorTitle = styled(Box)(() => ({
  padding: '8px',
  fontWeight: 'bold',
  width: '100%',
  color: colors.darkgray,
}));
