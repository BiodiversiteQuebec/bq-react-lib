import React from 'react';
import { TranslationContext } from './TranslationContext';
//import useTranslation from "next-translate/useTranslation";

const useTranslation = (text: string) => ({
  t: (text: string) => text,
  lang: 'en',
});
export const TranslateWrapper = (props: any) => {
  const { t, lang } = useTranslation('common');

  return (
    <TranslationContext.Provider
      value={{
        t,
        lang,
      }}
    >
      {props.children}
    </TranslationContext.Provider>
  );
};
