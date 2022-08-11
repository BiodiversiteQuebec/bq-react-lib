/* eslint-disable @typescript-eslint/no-empty-function */
// import "../sidebar.scss";

import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import { colors } from '../styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  components: {
    // Name of the component
    MuiAccordion: {},
    MuiAccordionDetails: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          backgroundColor: 'transparent',
          padding: '0px 16px 8px ',
        },
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          backgroundColor: 'transparent',
          padding: '0px 16px 0px',
          maxHeight: '42px',
          minHeight: '0px',
        },
      },
    },
  },
});

export const CustomAccordion = (props: any) => {
  const {
    handleChange = () => {},
    accordionSummary = '',
    expanded = false,
    expandIcon,
    id = '',
    children,
    hide,
  } = props;

  const upChange = (panel: any) => {
    handleChange(panel);
  };

  return (
    <ThemeProvider theme={theme}>
      <Accordion
        disableGutters
        expanded={expanded}
        onClick={() => upChange(id)}
        style={{ width: '100%', display: hide ? 'none' : '' }}
      >
        <AccordionSummary
          aria-controls="panel1bh-content"
          expandIcon={expandIcon || ''}
        >
          <label
            htmlFor="group-select"
            style={{
              textAlign: 'center',
              width: '100%',
              color: colors.darkgreen,
            }}
            className="text-primary-dark-green select-label"
          >
            {accordionSummary}
          </label>
        </AccordionSummary>
        <AccordionDetails>
          <div className="siderbar-dropdown text-primary-dark-green">
            {children}
          </div>
        </AccordionDetails>
      </Accordion>
    </ThemeProvider>
  );
};
