import { createContext } from 'react';

export const TranslationContext = createContext({
  t: (text: string) => text,
  lang: '',
});
