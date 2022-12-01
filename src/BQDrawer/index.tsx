import React from 'react';
import Drawer from '@mui/material/Drawer';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { defaultTranslationFn } from '../utils';
import { styled } from '@mui/material/styles';
import { colors } from '../styles';

/**
 * Component props
 */
interface BQDrawerProps {
  t?: (text: string) => string;
  drawerContent?: JSX.Element;
  tabs: Array<any>;
  setDrawerOpen: (value: boolean) => void;
  drawerOpen: boolean;
  setSelectedTab: (value: number) => void;
  selectedTab: number;
}

/**
 *
 * @param props
 * @returns
 */
export const BQDrawer = (props: BQDrawerProps) => {
  const {
    t = defaultTranslationFn,
    tabs,
    drawerContent,
    setDrawerOpen,
    drawerOpen,
    setSelectedTab,
    selectedTab,
  } = props;
  const drawerWidth = '30vw';

  /**
   *
   */
  const handleDrawerOpenClose = () => {
    setDrawerOpen(!drawerOpen);
  };

  /**
   *
   * @param event
   * @param newValue
   */
  const handleChange = (event: any, newValue: any) => {
    if (newValue !== 0) {
      setSelectedTab(newValue);
    }
    if (!drawerOpen) {
      setDrawerOpen(true);
    }
  };

  const BQTab = styled(Tab)({
    color: colors.bqlightgray,
    fontSize: '1em',
    textTransform: 'none',
    '&:hover': {
      color: colors.darkgray,
      opacity: 1,
    },
    '&.Mui-selected': {
      color: colors.bqdarkgreen,
    },
  });

  /**
   *
   */
  const forceDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const allTabs = tabs.map((tab: any, index: any) => (
    <BQTab
      key={tab.index}
      icon={tab.icon}
      label={tab.title}
      className={tab.title}
      onClick={forceDrawerOpen}
      sx={{ boxShadow: '0px 3px 5px #aaa6' }}
    />
  ));

  return (
    <div>
      <React.Fragment key="right">
        <Tabs
          value={selectedTab}
          onChange={handleChange}
          aria-label="icon label tabs example"
          orientation="vertical"
          sx={{
            position: 'fixed',
            zIndex: 999,
            top: '35vh',
            backgroundColor: 'white',
            width: '100px',
            ...(drawerOpen && {
              right: { sm: '30vw', xs: 'calc(100vw-120px)' },
            }),
            ...(!drawerOpen && { right: '0vw' }),
          }}
        >
          {drawerOpen ? (
            <BQTab
              icon={<ChevronRightIcon />}
              onClick={handleDrawerOpenClose}
              sx={{ boxShadow: '0px 3px 5px #aaa6' }}
            />
          ) : (
            <BQTab
              icon={<ChevronLeftIcon />}
              onClick={handleDrawerOpenClose}
              sx={{ boxShadow: '0px 3px 5px #aaa6' }}
            />
          )}
          {allTabs}
        </Tabs>
        <Drawer
          anchor="right"
          open={drawerOpen}
          variant="persistent"
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            width: {
              sm: drawerWidth,
              xs: 'calc(100vw - 100px)',
            },
            flexShrink: 200,
            overflow: 'show',
            '& .MuiDrawer-paper': {
              width: {
                sm: drawerWidth,
                xs: 'calc(100vw - 100px)',
              },
              top: '50px',
              zIndex: 800,
              boxShadow: '-2px 3px 4px #dbdbdb',
            },
          }}
        >
          {drawerContent !== null} {drawerContent}
        </Drawer>
      </React.Fragment>
    </div>
  );
};
