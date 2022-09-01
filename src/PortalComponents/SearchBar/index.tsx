import React, { useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { SearchBarIcon, SearchBarWrapper, SearchBarInput } from './styles';
import { ResultMenu } from './ResultMenu';

export const SearchBar = (props: any) => {
  const { t = (text: string) => text } = props;
  const { onBlur } = props;
  const [collapse, setCollapse] = useState(true);

  const focusOut = (e: any) => {
    if (onBlur) onBlur();
    setCollapse(true);
  };

  const onkeydown = (e: any) => {
    setCollapse(e.target.value.trim().length > 0 ? false : true);
  };
  return (
    <SearchBarWrapper onBlur={focusOut}>
      <div style={{ position: 'relative' }}>
        <SearchBarInput placeholder={t('recherche')} onChange={onkeydown} />
        <SearchBarIcon>
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="fa-regular fa-1x"
            style={{ opacity: 1, color: 'gray' }}
          />
        </SearchBarIcon>
      </div>

      {!collapse && <ResultMenu />}
    </SearchBarWrapper>
  );
};
