import styled from 'styled-components';
import { colors } from '../styles';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

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
