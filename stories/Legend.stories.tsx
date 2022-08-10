import React from 'react';
import { Meta, Story } from '@storybook/react';

import Legend from '../src/Legend';

const legendStory: Meta = {
  title: 'Legend',
  component: Legend,
};

export default legendStory;

const Template: Story<any> = args => <Legend {...args} />;

/**
 * Bottom-Right
 */
const propsBottomRight = {
  id: 50,
  scale: "Nombre d'observations",
  items: [
    {
      color: '#FED976',
      text: '1-25',
    },
    {
      color: '#FEB24C',
      text: '25-50',
    },
    {
      color: '#FD8D3C',
      text: '50-250',
    },
    {
      color: '#FC4E2A',
      text: '250-500',
    },
    {
      color: '#E31A1C',
      text: '500-2500',
    },
    {
      color: '#BD0026',
      text: '2500-25000',
    },
    {
      color: '#800026',
      text: '25000-50000',
    },
    {
      color: '#2f000e',
      text: '50000+',
    },
  ],
  absolute: true,
  location: 'bottom-right',
  bottom: 20,
  right: 10,
};

export const LegendBottomRight = Template.bind({});

LegendBottomRight.args = propsBottomRight;
