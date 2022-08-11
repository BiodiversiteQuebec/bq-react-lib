import React from 'react';
import { Meta, Story } from '@storybook/react';
import { BottomNavBar } from '../src/BottomNavBar';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import MapIcon from '@mui/icons-material/Map';
import TableChartIcon from '@mui/icons-material/TableChart';

const bottomNavBarStory: Meta = {
  title: 'BottomNavBar',
  component: BottomNavBar,
};

export default bottomNavBarStory;

const Template: Story<any> = args => {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <BottomNavBar {...args} />
    </div>
  );
};
const Props = {
  items: [
    {
      icon: <FormatListBulletedIcon />,
      label: 'Formulaire',
    },
    {
      icon: <MapIcon />,
      label: 'Carte',
    },
    {
      icon: <TableChartIcon />,
      label: 'eux de donnees',
    },
  ],
  onValueChange: (value: any) => console.log(value),
  t: (value: string) => value,
};

export const BottomNavBarTemplate = Template.bind({});

BottomNavBarTemplate.args = Props;
