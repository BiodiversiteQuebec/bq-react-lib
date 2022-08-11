import React, { useState } from 'react';
import _ from 'underscore';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { CListSubheader, CSelect } from '../selectorstyles';
import { TaxaMenuItem } from '../TaxaMenuItem';

/**
 *
 */
interface SelectorProps {
  onValueChange: (value: any | undefined) => void;
  selectorId?: string;
  elementList?: Array<any>;
}

/**
 *
 * @param props
 * @returns
 */
export const GroupedSelect = (props: SelectorProps) => {
  const { elementList = [], onValueChange, selectorId } = props;
  const [value, setValue] = useState('');
  const handleChange = (event: any) => {
    setValue(event.target.value);
    onValueChange({ selectorId, value: event.target.value });
  };

  React.useEffect(() => {
    setValue(elementList.length > 0 ? elementList[1].option : '');
  }, [elementList]);

  let group = '';
  return (
    <div className="selector38px" style={{ width: '100%' }}>
      <FormControl sx={{ width: '100%' }}>
        <CSelect
          displayEmpty
          value={value}
          onChange={handleChange}
          native={false}
          renderValue={selected => selected as React.ReactNode}
        >
          {elementList.map((element: any) => {
            if (element.group_fr !== group) {
              group = element.group_fr;
              return (
                <CListSubheader key={_.uniqueId(JSON.stringify(element))}>
                  {element.group_fr}
                </CListSubheader>
              );
            }
            return (
              <MenuItem
                key={_.uniqueId(JSON.stringify(element))}
                value={element.option}
              >
                <TaxaMenuItem {...element} />
              </MenuItem>
            );
          })}
        </CSelect>
      </FormControl>
    </div>
  );
};
