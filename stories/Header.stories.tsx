import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';

import { Header } from '../src/PortalComponents/Header';
import { AppModeProvider } from '../src/context';
import { BottomNavBar } from '../src/BottomNavBar';

const headerStory: Meta = {
  title: 'Header-x',
  component: Header,
};

export default headerStory;

export const HeaderBuilder = (props: any) => {
  const mode = 'dark';
  //const logoUrl = `https://picsum.photos/800/600?random=1`;
  const logoUrl = `../src/assets/logo-dark-mode-fr.svg`;
  const [tabCardsLists, setTabCardsLists] = useState([[], [], []]);

  return <Header logoUrl={logoUrl} tabCardsLists={tabCardsLists} />;
};

const Template: Story<any> = (args) => {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <AppModeProvider>
        {' '}
        <HeaderBuilder {...args} />
      </AppModeProvider>
    </div>
  );
};
const Props = {
  tabCardsLists: [[], [], []],
  logoUrl: `https://picsum.photos/800/600?random=1`,
  t: (value: string) => value,
};

export const HeaderTemplate = Template.bind({});

HeaderTemplate.args = Props;
