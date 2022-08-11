import React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import _ from 'underscore';

interface BottomNavBarItem {
  label: string;
  icon: any;
}

interface BottomNavBarProps {
  onValueChange: (newValue: number) => void;
  items: Array<BottomNavBarItem>; // example: {label:"Carte", icon:<MapIcon /> t:...}
  t: (text: string) => string;
}

/**
 *
 * @param props properties
 * @returns component
 */
export const BottomNavBar = (props: BottomNavBarProps) => {
  const {
    onValueChange = (newValue: number) => 0,
    items = [],
    t = (text: string) => text,
  } = props;
  const [value, setValue] = React.useState(1);

  return (
    <div style={{ width: '100%', zIndex: 0 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
          onValueChange(newValue);
        }}
      >
        {items.map((item: BottomNavBarItem) => {
          return (
            <BottomNavigationAction
              label={t(item.label)}
              icon={item.icon}
              key={_.uniqueId()}
            />
          );
        })}
      </BottomNavigation>
    </div>
  );
};
