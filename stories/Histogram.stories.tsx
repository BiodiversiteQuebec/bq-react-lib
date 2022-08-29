import React from 'react';
import { Meta, Story } from '@storybook/react';
import { BQDrawer } from '../src/BQDrawer';
import { Histogram } from '../src/Histogram';
import ForestIcon from '@mui/icons-material/Forest';
import BarChartIcon from '@mui/icons-material/BarChart';

const histogramStory: Meta = {
  title: 'Histogram',
  component: BQDrawer,
};

export default histogramStory;

const Template: Story<any> = (args) => {
  return <div style={{ width: '100%', height: '100%' }}></div>;
};
const BQDrawerProps = {
  tabs: [
    {
      icon: <ForestIcon />,
      title: 'Découvrir',
      index: 1,
    },
    {
      icon: <BarChartIcon />,
      title: 'Analyser',
      index: 2,
    },
  ],
  drawerContent: () => <div style={{ color: 'black' }}> BQDrawer</div>,
  setDrawerOpen: (value: boolean) => value,
  drawerOpen: false,
  setSelectedTab: (value: number) => value,
  selectedTab: 0,
};

export const BDqdrawer = Template.bind({});

BDqdrawer.args = BQDrawerProps;
