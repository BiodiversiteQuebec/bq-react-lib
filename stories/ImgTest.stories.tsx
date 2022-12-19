import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import { ImgTester } from '../src/ImgTester';
import { AppModeProvider } from '../src/context';

const carouselStory: Meta = {
  title: 'ImgTester',
  component: ImgTester,
};

export default carouselStory;

const Template: Story<any> = (args) => {
  const { cards } = args;
  return (
    <div
      style={{ width: '100%', height: '100%', background: 'rgba(0,0,0,.8)' }}
    >
      <AppModeProvider>
        <ImgTester />
      </AppModeProvider>
    </div>
  );
};

const Props = {};

export const CarouselTemplate = Template.bind({});

CarouselTemplate.args = Props;
