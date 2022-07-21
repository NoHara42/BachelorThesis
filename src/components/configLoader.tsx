import { PlusIcon } from "@heroicons/react/solid";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { DropDown, NumberInput, CheckBox } from "./exports";
import SelectSearch, { toOptions } from "./formElements/selectSearch";

type Option = { value: string; label: string; type?: string };

export default function ConfigLoader(props) {
  const excludeFunc = (value) => !excludedMetadata.includes(value.label);

  const [loadedConfigs, setLoadedConfigs] = useState(props.defaultConfigs);
  const [optionsCache, setOptionsCache] = useState(null);

  const endpoint = "headers";
  const param = { tableName: props.tableName };
  let excludedMetadata = props.excludedMetadata;

  const requestHeaders = async () => {
    return axios
      .get(new URL(endpoint, process.env.SERVER_URL).href, {
        params: param,
      })
      .then((response) => {
        let options = toOptions(
          response.data.filter((value) => !value.isId),
          (dataValue) => dataValue.name,
          (dataValue) => ({ type: dataValue.type })
        ).filter(excludeFunc);
        console.log("Response:", response, "Options:", options);
        return options;
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    (async () => {
      setOptionsCache(await requestHeaders());
    })();
  }, []);


  // useEffect(() => {
  //   console.log(props.defaultConfigs);
  //   setLoadedConfigs(props.defaultConfigs);
  // }, [props.defaultConfigs]);


  const onSelectedOptionsChange = (option) => {
    setLoadedConfigs([...loadedConfigs, option]);
    console.log(loadedConfigs);
        
    excludedMetadata.push(option.label);
    setOptionsCache(optionsCache.filter(excludeFunc));
  };

  return (
    <table className="w-full">
      <thead>
        <tr>
          <th>{props.tableName}</th>
        </tr>
      </thead>
      <tbody>
        {loadedConfigs?.map((value) => (
          <tr key={value.value}>
            <td>
              <FormElement
                onChange={props.onDynChange}
                tableName={props.tableName}
                type={value.type}
                label={value.label}
              ></FormElement>
            </td>
          </tr>
        ))}
        <tr>
          <td>
            <div
              className="dropdown tooltip tooltip-right"
              data-tip={`Add ${props.tableName} filter parameter`}
            >
              <PlusIcon
                tabIndex={0}
                className="btn btn-square btn-ghost btn-sm text-primary m-1"
              ></PlusIcon>
              <label className="dropdown-content shadow-xl w-52">
                <SelectSearch
                  config={{ hideSelectedOptions: true }}
                  options={optionsCache}
                  onSelectedOptionsChange={onSelectedOptionsChange}
                />
              </label>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export function FormElement(props) {
  switch (props.type) {
    case "String":
      return (
        <DropDown
          type={props.type}
          tableName={props.tableName}
          onChange={props.onChange} 
          label={props.label}></DropDown>
      );
    case "Float":
      return (
        <NumberInput
          type={props.type}
          tableName={props.tableName}
          onChange={props.onChange}
          label={props.label}
        ></NumberInput>
      );
    case "Int":
      return (
        <NumberInput
          type={props.type}
          tableName={props.tableName}
          onChange={props.onChange}
          label={props.label}
        ></NumberInput>
      );
    case "Boolean":
      return (
        <CheckBox
          type={props.type}
          tableName={props.tableName} 
          onChange={props.onChange}
          label={props.label}></CheckBox>
      );
    default:
      console.error(props.type, "type does not have a supported FormElement");
  }
}
