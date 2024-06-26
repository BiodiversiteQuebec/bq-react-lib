import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import { CustomHeader } from '../src/PortalComponents/Header';
import { BQHeader } from '../src/PortalComponents/BQHeader';

const MyComponent = (props: any) => {
  return <div></div>;
};
const headerStory: Meta = {
  title: 'BQ-Header',
  component: MyComponent,
};

export default headerStory;

const Template: Story<any> = (args) => {
  const [locale, setLocale] = useState('fr');

  const switchLocaleFn = (locale: string) => {
    //console.log('locale', locale);
    setLocale(locale);
  };
  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <BQHeader
        locale={locale}
        activePage={'inventaire_terrain'}
        logoMode={'color-dark'}
        headerWidth="100%"
        switchLocaleFn={switchLocaleFn}
        user={{ name: 'Jonny', lastname: 'Deep', role: 'admin' }}
      />

      <div>{locale}</div>
    </div>
  );
};

const items = [
  {
    href: 'https://biodiversite-quebec.ca/',
    text: 'Accueil',
    key: 'accueil',
    default: true,
  },
  {
    href: 'https://biodiversite-quebec.ca/tableau-coleo-react/',
    text: 'Inventaire Terrain',
    key: 'inventaire_terrain',
    default: false,
  },
  {
    href: 'https://biodiversite-quebec.ca/tableau-coleo-react/',
    text: 'Indicateur',
    key: 'indicateur',
    default: false,
  },
  {
    href: 'https://coleo.biodiversite-quebec.ca/apps/tableau-atlas-react/',
    text: 'Explorer',
    key: 'explorateur_boidiversite',
    default: false,
  },
  {
    href: 'https://biodiversite-quebec.ca/',
    text: 'Decouverte',
    key: 'decouverte',
    default: false,
  },
];

const Props = {};

export const HeaderTemplate = Template.bind({});

HeaderTemplate.args = Props;
