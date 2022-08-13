import { PlusIcon } from "@heroicons/react/solid";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { requestRangeNumberValuesOfColumn } from "..";
import { GlobalContext } from "../app";
import { DropDown, NumberInput, CheckBox } from "./exports";
import SelectSearch, { toOptions } from "./formElements/selectSearch";

type Option = { value: string; label: string; type?: string };

export default function ConfigLoader(props) {
  const globalData = useContext(GlobalContext);
  const excludedMetadata = props.excludedMetadata;
  const excludeFunc = (value) => !excludedMetadata.includes(value.label);
  const includeFunc = (value) => props.supportedMetadata.includes(value.label);

  //A list of available headers to configure before their inputs are filled with values
  const [optionsCache, setOptionsCache] = useState(null);

  //A map of all the loaded configs, which may have been assigned a value.
  const [loadedConfigs, setLoadedConfigs] = useState(props.values);

  //called when a form input has been changed
  const handleDynChange = (changeValue, changeTuple) => {
    globalData.saveDynChange(
      props.currentPlotId,
      props.tableName,
      changeTuple[0],
      {
        label: changeTuple[1].label,
        type: changeTuple[1].type,
        value: changeValue,
      }
    );
  };

  //called when a dynamic config has been selected
  const onSelectedOptionsChange = (option) => {
    
    //Makes sure that value is initialised with null, 
    // -as we will set value to the id below
    globalData.saveDynChange(props.currentPlotId, props.tableName, option.id, {
      label: option.label,
      type: option.type,
      value: null,
    });

    excludedMetadata.push(option.label);    

    // sets all availableOptions values to the id of the option, 
    // because the searchable select uses "value" as a key for some reason.
    // removing causes a bug
    // also filteres any already selected options
    setOptionsCache(
      optionsCache
        .map((availableOption) => ({
          ...availableOption,
          value: availableOption.id,
        }))
        .filter(excludeFunc)
    );
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
        )
          .filter(excludeFunc)
          .filter(includeFunc);
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

  return (
    <table className="w-full self-start">
      <thead>
        <tr>
          <th>{props.tableName} (Currently supported metadata)</th>
        </tr>
      </thead>
      <tbody>
        {Array.from(loadedConfigs)?.map((loadedConfig) => (
          <tr key={loadedConfig[0]}>
            <td>
              <FormElement
                formId={loadedConfig[0]}
                currentPlotId={props.currentPlotId}
                configStateObj={props.configStateObj}
                onChange={(changeEvent) =>
                  handleDynChange(changeEvent, loadedConfig)
                }
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
                className="animate-pulse btn btn-square btn-ghost btn-sm text-primary m-1"
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
  const [minMax, setMinMax] = useState(props.minMax);

  useEffect(() => {
    (async () => {
      let data: Array<any> = await requestRangeNumberValuesOfColumn(
        props.tableName,
        props.label
      );
      setMinMax(data);
    })();
  }, []);

  switch (props.type) {
    case "String":
      return (
        <DropDown
          formId={props.formId}
          currentPlotId={props.currentPlotId}
          tableName={props.tableName}
          configStateObj={props.configStateObj}
          label={props.label}
          type={props.type}
          onChange={props.onChange}
        ></DropDown>
      );
    case "Int":
      return (
        minMax && (
          <NumberInput
            formId={props.formId}
            currentPlotId={props.currentPlotId}
            tableName={props.tableName}
            label={props.label}
            configStateObj={props.configStateObj}
            type={props.type}
            onChange={props.onChange}
            minMax={minMax}
          ></NumberInput>
        )
      );
    case "Float":
      return (
        <NumberInput
          formId={props.formId}
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
          formId={props.formId}
          type={props.type}
          defaultValue={props.defaultValue}
          tableName={props.tableName}
          onChange={props.onChange}
          label={props.label}
        ></CheckBox>
      );
    default:
      console.error(props.type, "type does not have a supported FormElement");
  }
}
