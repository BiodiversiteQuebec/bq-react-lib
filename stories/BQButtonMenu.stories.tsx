import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import { BQButtonMenu } from '../src/BQButtonMenu';

const meta: Meta = {
  title: 'BQButtonMenu',
  component: BQButtonMenu,
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

// Example of how to use BQButtonMenu
// notifyChange: notify when user clicks over  Discover and Analyse Button (show the drawer in Atlas)
// mapBtnClick: notify when user clicks over  Map button (go back to the map in Atlas)
const Template: Story<any> = (args) => {
  const [activeBtn, setActiveBtn] = useState(1);
  const notifyChange = (activeTab: number) => {
    setActiveBtn((oldValue: number) => activeTab);
  };
  const mapBtnClick = () => {
    setActiveBtn((oldValue: number) => 3);
  };

  const props = {
    activeBtn,
    notifyChange,
    mapBtnClick,
  };

  return <BQButtonMenu {...props} />;
};

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {};
