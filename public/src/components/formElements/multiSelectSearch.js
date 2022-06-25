import React from 'react';
import Select from 'react-select';

export default function MultiSelectSearch(props) {
  handleChange = (value) => {
    props.onSelectedOptionsChange(value);
    console.log(value);
  }
  return (
    <Select
      value={props.selectedOptions}
      onChange={handleChange}
      theme={(theme) => ({
        ...theme,
        colors: {
          ...theme.colors,
          primary: '#4ade80',
          primary25: theme.colors.neutral10,
        }
      })}      
      {...props.config}
    />
  );
}