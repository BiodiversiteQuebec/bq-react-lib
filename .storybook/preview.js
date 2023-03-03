import '../src/styles/tailwind.css';

const customViewports = {
  xs: {
    name: 'XS',
    styles: {
      width: '480px',
      height: '600px',
    },
  },
  s: {
    name: 'S',
    styles: {
      width: '640px',
      height: '801px',
    },
  },
  m: {
    name: 'M',
    styles: {
      width: '960px',
      height: '700px',
    },
  },
  l: {
    name: 'L',
    styles: {
      width: '1200px',
      height: '800px',
    },
  },
  xl: {
    name: 'XL',
    styles: {
      width: '2400px',
      height: '900px',
    },
  },
};

// https://storybook.js.org/docs/react/writing-stories/parameters#global-parameters
export const parameters = {
  // https://storybook.js.org/docs/react/essentials/actions#automatically-matching-args
  actions: { argTypesRegex: '^on.*' },
  viewport: { viewports: customViewports },
};
