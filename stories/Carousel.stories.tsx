import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import { Carousel } from '../src/PortalComponents';
import { AppModeProvider } from '../src/context';

const carouselStory: Meta = {
  title: 'Carousel',
  component: Carousel,
};

export default carouselStory;

const Template: Story<any> = (args) => {
  const { cards } = args;
  return (
    <div
      style={{ width: '100%', height: '100%', background: 'rgba(0,0,0,.8)' }}
    >
      <AppModeProvider>
        <Carousel cards={cards} onClick={() => 0} />
      </AppModeProvider>
    </div>
  );
};

const arr = [
  { img: `https://picsum.photos/800/600?random=1`, title: 'Home 1' },
  { img: `https://picsum.photos/800/600?random=2`, title: 'Home 2' },
  { img: `https://picsum.photos/800/600?random=3`, title: 'Home 3' },
  { img: `https://picsum.photos/800/600?random=4`, title: 'Home 4' },
  { img: `https://picsum.photos/800/600?random=5`, title: 'Home 5' },
  { img: `https://picsum.photos/800/600?random=6`, title: 'Home 6' },
];

const Props = {
  t: (value: string) => value,
  cards: arr,
};

export const CarouselTemplate = Template.bind({});

CarouselTemplate.args = Props;
