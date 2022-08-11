import styled from 'styled-components';
import { colors } from '../styles';
import Paper from '@mui/material/Paper';

export const CardContainer = styled(Paper)`
  width: 100%;
  padding: 10px 0;
`;

export const TextSmall = styled.div`
  font-size: 8pt;
  color: ${colors.darkgreen};
`;

export const TextMedium = styled(TextSmall)`
  font-size: 14pt;
`;

export const BigMedium = styled(TextSmall)`
  font-size: 16pt;
`;

export const CardTop = styled(BigMedium)`
  width: 100%;
  display: flex;
  padding: 2px 0.3em;
`;

export const CardBottom = styled.div`
  display: flex;
  padding: 0.5em;
`;

export const CardDetail = styled.div`
  border-left: 2px solid rgba(46, 72, 62, 0.4);
  padding-left: 3px;
  flex: 1;
`;

export const CardDetailTop = styled(TextMedium)`
  font-weight: bold;
`;
