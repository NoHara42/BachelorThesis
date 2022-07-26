import { PlusIcon } from "@heroicons/react/solid";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../app";
import { DropDown, NumberInput, CheckBox } from "./exports";
import SelectSearch, { toOptions } from "./formElements/selectSearch";

type Option = { value: string; label: string; type?: string };

export default function ConfigLoader(props) {
  const globalData = useContext(GlobalContext);

  const getCurrentSavedTable = () => {
    return globalData.allPlotConfigs.get(props.currentPlotId)[props.tableName];
  }

  const excludeFunc = (value) => !props.excludedMetadata.includes(value.label);

  //A list of available headers to configure before their inputs are filled with values
  const [optionsCache, setOptionsCache] = useState(null);

  //A map of all the loaded configs, which may have been assigned a value.
  const [loadedConfigs, setLoadedConfigs] = useState(props.values);

  //called when a form input has been changed
  const handleDynChange = (changeEvent, changeTuple) => {
    globalData.saveDynChange(
      props.currentPlotId,
      props.tableName,
      changeTuple[0],
      {
        label: changeTuple[1].label,
        type: changeTuple[1].type,
        value: changeEvent.target.value
      });
  };

  //called when a dynamic config has been selected
  const onSelectedOptionsChange = (option) => {
    globalData.saveDynChange(
      props.currentPlotId,
      props.tableName,
      option.id,
      {
        label: option.label,
        type: option.type,
        value: option.value
      });

    props.excludedMetadata.push(option.label);

    // sets all availableOptions values to the id of the option, because the searchable select uses "value" as a key for some reason.
    // removing causes a bug
    // also filteres any already selected options
    setOptionsCache(optionsCache.map((availableOption) => ({ ...availableOption, value: availableOption.id })).filter(excludeFunc));
  };


  const requestHeaders = async () => {
    return axios
      .get(new URL("headers", process.env.SERVER_URL).href, {
        params: { tableName: props.tableName },
      })
      .then((response) => {
        let options = toOptions(
          response.data.filter((value) => !value.isId),
          (dataLabel) => dataLabel.name,
          (dataValue) => null,
          (metaData) => ({ type: metaData.type })
        ).filter(excludeFunc);
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

  useEffect(() => {
    setLoadedConfigs(props.values);    
  }, [props.values]);


  useEffect(() => {
    console.log({tableName: props.tableName, loadedConfigs, optionsCache });
  });

  return (
    <table className="w-full">
      <thead>
        <tr>
          <th>{props.tableName}</th>
        </tr>
      </thead>
      <tbody>
        {Array.from(loadedConfigs)?.map((loadedConfig) => (
          <tr key={loadedConfig[0]}>
            <td>
              <FormElement
                onChange={changeEvent => handleDynChange(changeEvent, loadedConfig)}
                defaultValue={getCurrentSavedTable().get(loadedConfig[0])?.value}
                tableName={props.tableName}
                type={loadedConfig[1].type}
                label={loadedConfig[1].label}
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
          defaultValue={props.defaultValue}
          tableName={props.tableName}
          onChange={props.onChange}
          label={props.label}></DropDown>
      );
    case "Float":
      return (
        <NumberInput
          type={props.type}
          defaultValue={props.defaultValue}
          tableName={props.tableName}
          onChange={props.onChange}
          label={props.label}
        ></NumberInput>
      );
    case "Int":
      return (
        <NumberInput
          type={props.type}
          defaultValue={props.defaultValue}
          tableName={props.tableName}
          onChange={props.onChange}
          label={props.label}
        ></NumberInput>
      );
    case "Boolean":
      return (
        <CheckBox
          type={props.type}
          defaultValue={props.defaultValue}
          tableName={props.tableName}
          onChange={props.onChange}
          label={props.label}></CheckBox>
      );
    default:
      console.error(props.type, "type does not have a supported FormElement");
  }
}
