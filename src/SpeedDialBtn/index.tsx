import React, { useContext } from 'react';
import './speeddialbtn.css';
import SpeedDial from '@mui/material/SpeedDial';
import TableChartIcon from '@mui/icons-material/TableChart';
import MapIcon from '@mui/icons-material/Map';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import LanguageIcon from '@mui/icons-material/Language';

interface SpeedDialBtnProps {
  location: string;
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
  direction: any;
  onClickSwitch: (text: string) => void;
  t: (text: string) => string;
  language: any;
  changeLanguage: (value: any) => any;
}

export const SpeedDialBtn = (props: SpeedDialBtnProps) => {
  const {
    location = '',
    top = 0,
    bottom = 0,
    left = 0,
    right = 0,
    direction = 'left',
    onClickSwitch = (text: string) => text,
    t = (text: string) => text,
    language,
    changeLanguage,
  } = props;

  const actions = [
    { icon: <MapIcon />, name: t('Carte'), key: 'map' },
    {
      icon: <TableChartIcon />,
      name: t('Jeux de données'),
      key: 'table',
    },
    { icon: <LanguageIcon />, name: language, key: 'language' },
  ];

  /**
   *
   * @param locationClass
   * @returns
   */
  const getStyle = (locationClass: string): any => {
    if (locationClass === 'bottom-left')
      return { position: 'absolute', bottom, left };
    if (locationClass === 'bottom-right')
      return { position: 'absolute', right, bottom };
    if (locationClass === 'top-right')
      return { position: 'absolute', right, top };
    if (locationClass === 'top-left')
      return { position: 'absolute', left, top };

    return {};
  };

  return (
    <SpeedDial
      ariaLabel="SpeedDial playground example"
      icon={<SpeedDialIcon />}
      direction={direction}
      sx={getStyle(location)}
    >
      {actions.map(action => (
        <SpeedDialAction
          key={action.key}
          icon={action.icon}
          tooltipTitle={action.name}
          onClick={
            action.key !== 'language'
              ? () => {
                  onClickSwitch(action.key);
                }
              : () => {
                  changeLanguage(language === 'fr' ? 'en' : 'fr');
                }
          }
        />
      ))}
    </SpeedDial>
  );
};
