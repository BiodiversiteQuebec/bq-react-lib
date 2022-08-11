import React, { useCallback, useState, useEffect } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import CircularProgress from '@mui/material/CircularProgress';
import Popper from '@mui/material/Popper';
import { CTextField } from './customautocompletestyles';
import { IDataProvider } from './models';

import { debounce } from 'lodash';

// Top films as rated by IMDb users. http://www.imdb.com/chart/top

interface IAutocompleteItem {
  title: string;
  year: number;
}

const sleep = (delay = 0) => {
  return new Promise(resolve => {
    setTimeout(resolve, delay);
  });
};

const CustomePopper = (props: any) => (
  <Popper
    {...props}
    style={{ zIndex: 9999999, width: '234px' }}
    placement="bottom"
  />
);

const initOptions: IAutocompleteItem[] = [];
export const Asynchronous = (props: any) => {
  // eslint-disable-next-line react/destructuring-assignment
  const dataSource: IDataProvider<string, any> = props.dataProvider;
  const { onChange, id = 'asynchronous-demo' } = props;
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState(initOptions);
  const [loading, setLoading] = useState(open && options.length === 0);

  useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);

  const deboundingFn = useCallback(
    debounce(newValue => {
      setLoading(true);
      dataSource.getData(newValue).then(data => {
        setOptions(data);
        setLoading(false);
      });
    }, 300),
    []
  );

  /**
   * @param event event
   * @param newInputValue new value
   */
  const onInputChange = (event: any, newInputValue: any) => {
    deboundingFn(newInputValue);
  };

  return (
    <Autocomplete
      className={id}
      data-testid="autocomplete-search-custom"
      PopperComponent={CustomePopper}
      sx={{ width: '100%' }}
      open={open}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      onInputChange={onInputChange}
      onChange={(event, newValue) => {
        onChange(newValue?.title);
      }}
      getOptionLabel={option => option.title}
      options={options}
      loading={loading}
      renderInput={params => (
        <CTextField
          {...params}
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <>
                {loading ? (
                  <CircularProgress color="inherit" size={20} />
                ) : null}
                {params.InputProps.endAdornment}
              </>
            ),
          }}
        />
      )}
    />
  );
};
