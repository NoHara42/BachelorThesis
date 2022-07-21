import React from "react";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../app";
import { debounce } from "../utils/debounces";
import { SelectSearch, RangeSlider, ConfigLoader } from "./exports";


const excludedDefaultAuthorHeaders = [
  "author",
  "authorX",
  "authorY",
  "forename",
  "surname",
  "works",
];

const excludedDefaultWorkHeaders = [];

export default function ExpandedNav(props) {
  const globalData = useContext(GlobalContext);

  const getConfigById = (id: string) => {
    return props.allPlotConfigs.get(id);
  };

  const getConfigByIdAndProp = (id: string, propName: string) => {
    return getConfigById(id)?.[propName];
  };

  const checkForOverridingConfigs = (propName: string, nullValue?: any) => {
    return (
      config[propName] ??
      getConfigByIdAndProp("generalConfig", propName) ??
      nullValue ??
      null
    );
  };

  // let config = getConfigById(props.id);
  const [config, setConfig] = useState(getConfigById(props.id));

  useEffect(() => {
    // config = getConfigById(props.id);
    setConfig(getConfigById(props.id));
    return () => {
      props.allPlotConfigs.set(props.id, config);
    };
  }, [props.id]);

  const handleAuthorsChange = (authors) => {
    // config.authors = authors;
    setConfig({...config, authors: authors});
    console.log(config);
  };

  const handleRangeChange = (range) => {
    setConfig({...config, range: range});
    console.log(config);
  };

  const handleDynChange = (dynChange, label, tableName, type) => {
    // config = {
    //   ...config,
    //   [tableName]: {
    //     ...config[tableName],
    //     [label]: { value: dynChange.target.value, type: type },
    //   },
    // };
    setConfig({
      ...config,
      [tableName]: {
        ...config[tableName],
        [label]: { value: dynChange.target.value, type: type },
      },
    });
    console.log(config);
  };

  return (
    <>
      <h5>Configure filtering for: "{props.label}"</h5>
      <div className="divider"></div>
      <label className="italic text-xs">
        Filter by author(s)...
        <SelectSearch
          labelFunc={(dataValue) => dataValue.authorY}
          data={globalData.allAuthors}
          config={{
            defaultOptions: true,
            isMulti: true,
            tabIndex: 0,
          }}
          onSelectedOptionsChange={handleAuthorsChange}
        ></SelectSearch>
      </label>
      <div className="flex flex-col md:flex-row justify-evenly grow my-4">
        <ConfigLoader
          defaultConfigs={Object.entries(
            checkForOverridingConfigs("Author", [])
          )}
          onDynChange={handleDynChange}
          excludedMetadata={excludedDefaultAuthorHeaders}
          tableName="Author"
        ></ConfigLoader>
        <div className="divider divider-vertical md:divider-horizontal"></div>
        <ConfigLoader
          defaultConfigs={Object.entries(checkForOverridingConfigs("Work", []))}
          excludedMetadata={excludedDefaultWorkHeaders}
          onDynChange={handleDynChange}
          tableName="Work"
        ></ConfigLoader>
      </div>
      <div className="italic text-xs mb-5 mx-2">
        Works published between the years... (inclusive)
        <RangeSlider
          onRangeChange={debounce(handleRangeChange)}
          defaultRangePair={checkForOverridingConfigs("range", [1705, 1969])}
        ></RangeSlider>
      </div>
    </>
  );
}
