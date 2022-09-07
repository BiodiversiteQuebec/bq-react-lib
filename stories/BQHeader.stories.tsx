import React from 'react';
import { Meta, Story } from '@storybook/react';
import { CustomHeader } from '../src/PortalComponents/Header';
import { AppModeProvider } from '../src/context';

const headerStory: Meta = {
  title: 'BQ-Header',
  component: CustomHeader,
};

export default headerStory;

const Template: Story<any> = (args) => {
  const { logoUrl, tabCardsLists } = args;
  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <AppModeProvider>
        <CustomHeader logoUrl={logoUrl} tabCardsLists={tabCardsLists} />
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
  tabCardsLists: [arr, arr, arr],
  logoUrl: `/images/logo-dark-mode-fr.svg`,
  t: (value: string) => value,
};

export const HeaderTemplate = Template.bind({});

HeaderTemplate.args = Props;
