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

  const getConfigByIdAndProp = (id: string, propName: string) => {
    return globalData.allPlotConfigs.get(id)?.[propName];
  };

  const checkForOverridingConfigs = (propName: string, nullValue?: any) => {    
    return (
      configObj?.[propName] ??
      getConfigByIdAndProp("generalConfig", propName) ??
      nullValue ??
      null
    );
  };
  
  const [configObj, setConfigObj] = useState(globalData.allPlotConfigs.get(props.id));

  useEffect(() => {
    setConfigObj(globalData.allPlotConfigs.get(props.id));
  }, [props.id]);

  useEffect(() => {
    globalData.setAllPlotConfigs(globalData.allPlotConfigs.set(props.id, configObj));
    console.log({allPlotConfigs: globalData.allPlotConfigs});
  }, [configObj])

  const handleAuthorsChange = (authors) => {
    setConfigObj({...configObj, authors: authors});
  };

  const handleRangeChange = (range) => {
    setConfigObj({...configObj, range: range});
  };

  const handleDynChange = (dynChange, label, tableName, type) => {
    setConfigObj(configObj[tableName].add(label, { value: dynChange.target.value, type: type }));
  };

  useEffect(() => {
    console.log({configObj});
  });

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
