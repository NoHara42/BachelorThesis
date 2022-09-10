import React, { useEffect, useState } from "react";
import WindowedSelect from "react-windowed-select";
import { v4 as uuidv4 } from "uuid";
import { AxiosResponse } from "axios";

// for whatever reason production builds using vite on docker wont work without this
const WindowedSelectAlias = (WindowedSelect as any).default ? (WindowedSelect as any).default : WindowedSelect;

type labelFuncType = (dataValue: Pick<AxiosResponse, "data">) => string
type ToOptions<T> = (data, labelFunc, metaDataFunc) => {value: string, label: string, type: string} 

export const toOptions = (data, labelFunc: (dataValue: any) => string | number, valueFunc?: (dataValue: any) => any, spreadedMetaData?: (...args:Array<any>) => any) => {  
  return data?.map((dataValue) => ({
    // generates a unique ID to differentiate duplicate options
    id: uuidv4(),
    value: valueFunc?.(dataValue),
    label: labelFunc?.(dataValue),
    ...spreadedMetaData?.(dataValue)
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


export default function SelectSearch(props) {

  const filterFunc = props.filterFunc ?? ((option, inputValue) =>
    option.label.toLowerCase().includes(inputValue.toLowerCase())
  );

  const options = toOptions(props.data, props.labelFunc, uuidv4, props.metaData);

  return (
    <WindowedSelectAlias
      onKeyDown={props.onKeyDown}
      tabIndex={0}
      className="z-10"
      value={props.value}
      defaultValue={props.defaultValue}
      onChange={props.onSelectedOptionsChange}
      options={props.options ?? options}
      filterOption={filterFunc}
      theme={theme}
      {...props.config}
    />
  );
}