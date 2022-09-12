import React from 'react';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import SearchIcon from '@mui/icons-material/Search';

/**
 *
 */
interface SearchBtnProps {
  /**
   *
   */
  onClick?: any;
  /**
   *
   */
  tooltip?: string;
}

/**
 *
 * @param props
 */
export const SearchBtn = (props: SearchBtnProps) => {
  const { onClick = () => 0, tooltip = '' } = props;
  return (
    <Tooltip title={tooltip}>
      <IconButton sx={{ width: 15, height: 15 }} onClick={onClick}>
        <SearchIcon sx={{ fontSize: 15, color: ' #2e483e' }} />
      </IconButton>
    </Tooltip>
  );
};
