import React, { useState } from "react";
import WindowedSelect, { WindowedMenuList } from "react-windowed-select";
import AsyncSelect from "react-select/async";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

const toOptions = (data, valueFunc, labelFunc) => {
  return data.map((dataValue) => ({
    // generates a unique ID to differentiate duplicate options
    key: uuidv4(),
    value: valueFunc(dataValue),
    label: labelFunc(dataValue),
  }));
};

const theme = (theme) => ({
  ...theme,
  colors: {
    ...theme.colors,
    primary: "#4ade80",
    primary25: theme.colors.neutral10,
  },
});

const filterFunc = (option, inputValue) =>
  option.value.toLowerCase().includes(inputValue.toLowerCase());

export default function SelectSearch(props) {
  const options = toOptions(props.data, props.valueFunc, props.labelFunc);

  const handleOnChange = (options, e) => {
    props.onSelectedOptionsChange(options);
  };

  return (
    <WindowedSelect
      tabIndex={0}
      className="z-10"
      onChange={handleOnChange}
      options={options}
      filterOption={filterFunc}
      theme={theme}
      {...props.config}
    />
  );
}

export function SelectSearchAsync(props) {
  const handleOnChange = (options, e) => {
    props.onSelectedOptionsChange(options);
  };

  const promiseOptions = (inputValue) => {
    let url = new URL(props.endpoint, process.env.SERVER_URL).href;
    return new Promise((resolve) => {
      axios
        .get(url, {
          params: props.param,
        })
        .then((response) => {
          let options = toOptions(
            response.data.filter((value) => !value.isId),
            (value) => value.type,
            (label) => label.name
          ).filter((option) =>
            option.label.toLowerCase().includes(inputValue.toLowerCase())
          );
          
          resolve(options);
        })
        .catch((err) => {
          console.error(err);
        });
    });
  };

  return (
    <AsyncSelect
      className="z-10"
      components={{ MenuList: WindowedMenuList }}
      cacheOptions={true}
      onChange={handleOnChange}
      defaultOptions={true}
      loadOptions={promiseOptions}
      theme={theme}
      {...props.config}
    />
  );
}
