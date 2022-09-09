import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { styled, useTheme } from '@mui/material/styles';
import Divider from '@mui/material/Divider';

export function BQNumberCard(props: any) {
  const { iconInCard, numberInCard, textInCard } = props;

  const [number, setNumber] = useState(0);
  const [text, setText] = useState('');
  const [icon, setIcon] = useState(<></>);

  useEffect(() => {
    setIcon(iconInCard);
    setText(textInCard);
    setNumber(numberInCard);
  }, [iconInCard, numberInCard, textInCard]);

  return (
    <Card sx={{ display: 'flex', width: '230px', margin: '10px' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent
          sx={{ flex: '1 0 auto', width: 140, paddingBottom: '0px' }}
        >
          <Typography component="div" variant="h5">
            {number}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
            sx={{ fontSize: '0.9em' }}
          >
            {text}
          </Typography>
        </CardContent>
      </Box>
      <CardMedia sx={{ width: 80, textAlign: 'center' }}>{icon}</CardMedia>
    </Card>
  );
}
