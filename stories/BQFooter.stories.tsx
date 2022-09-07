import React, {useContext} from 'react';
import { Meta, Story } from '@storybook/react';
import { Footer } from '../src/PortalComponents';
import { AppModeProvider, TranslateWrapper, TranslationContext } from '../src/context';


const footerStory: Meta = {
  title: 'BQ-Footer',
  component: Footer,
};

export default footerStory;

/**
 * component that wraps the theme and translation context and makes it available to all children elements
 * @param props 
 * @returns 
 */
const App = (props: any) => {
  return <AppModeProvider>  <TranslateWrapper>{props.children}</TranslateWrapper></AppModeProvider>;
};

const Template: Story<any> = (args) => {
  const { themes } = args;
   const { t } = useContext(TranslationContext);
  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <App>
        <div style={{ width: '100%', height: '40%', padding:'40px', fontWeight:'700', fontSize:'20px' }}>
          Note that the translation function t setted is: (text: string) => text ; in order to add localization to your components make sure to wrap the app in a Context for translation. Also make sure to use the proper useTranslation hook from the proper lib. In this example in TranslateWrapper we use a very simple function.  In the Portal web site we use next/translation but it my not work if you dont use nextjs. In that case you will have to create your context component based on another translation library (example: react-i18next) 
        </div>
        <Footer theme={themes?.darkMode} t={t} />
      </App>
    </div>
  );
};


const Props = {};

export const FooterTemplate = Template.bind({});

FooterTemplate.args = Props;
