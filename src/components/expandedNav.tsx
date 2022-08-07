import React from "react";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../app";
import { debounce } from "../utils/debounces";
import { SelectSearch, RangeSlider, ConfigLoader } from "./exports";


export default function ExpandedNav(props) {
  const globalData = useContext(GlobalContext);
  
  const [configObj, setConfigObj] = useState(globalData.allPlotConfigs.get(props.id));

  useEffect(() => {
    setConfigObj(globalData.allPlotConfigs.get(props.id));    
  }, [props.id]);

  useEffect(() => {
    globalData.savePlotConfig(props.id, configObj);    
  }, [configObj]);

  const handleAuthorsChange = (authorsChange) => {
    setConfigObj({...configObj, authors: authorsChange});
  };

  const handleRangeChange = (rangeChange) => {
    setConfigObj({...configObj, range: rangeChange});
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
          value={configObj.authors}
          data={globalData.allAuthors}
          config={{
            defaultOptions: true,
            isMulti: true,
            tabIndex: 0,
            hideSelectedOptions: true
          }}
          onSelectedOptionsChange={handleAuthorsChange}
        ></SelectSearch>
      </label>
      <div className="flex flex-col md:flex-row justify-evenly grow my-4">
        <ConfigLoader
          currentPlotId={props.id}
          values={configObj["Author"]}
          excludedMetadata={[
            "author",
            "authorX",
            "authorY",
            "forename",
            "surname",
            "works",
          ]}
          tableName="Author"
        ></ConfigLoader>
        <div className="divider divider-vertical md:divider-horizontal"></div>
        <ConfigLoader
          currentPlotId={props.id}
          values={configObj["Work"]}
          excludedMetadata={[]}
          tableName="Work"
        ></ConfigLoader>
      </div>
      <div className="italic text-xs mb-5 mx-2">
        Works published between the years... (inclusive)
        <RangeSlider
          onRangeChange={debounce(handleRangeChange)}
          values={configObj.range}
          defaultRangePair={[1705, 1969]}
        ></RangeSlider>
      </div>
    </>
  );
}
