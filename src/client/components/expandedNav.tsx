import React from "react";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../app";
import { SelectSearch, RangeSlider, ConfigLoader } from "./exports";


export default function ExpandedNav(props) {
  const globalData = useContext(GlobalContext);

  const configStateObj = useState(globalData.allPlotConfigs.get(props.id));
  const [configObj, setConfigObj] = configStateObj;

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

  return (
    <>
      <h5>Configure filtering for: "{props.label}"</h5>
      <div className="divider"></div>
      <div className="flex flex-col md:flex-row justify-evenly grow my-4">
        <ConfigLoader
          configStateObj={configStateObj}
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
          supportedMetadata={[
            "mainRegion",
            "mainResidence",
            "gender"
          ]}
          tableName="Author"
        ></ConfigLoader>
        <div className="divider divider-vertical md:divider-horizontal"></div>
        <ConfigLoader
          configStateObj={configStateObj} 
          currentPlotId={props.id}
          values={configObj["Work"]}
          excludedMetadata={[]}
          supportedMetadata={[
            "agePublication",
            "literatureForm",
            "genreX"
          ]}
          tableName="Work"
        ></ConfigLoader>
      </div>
      <label className="italic text-xs mb-4">
        Only include specific author(s)...
        <SelectSearch
          filterFunc={((option, inputValue) =>
            inputValue !== "" && (option.label.toLowerCase().includes(inputValue.toLowerCase())) 
          )}
          labelFunc={(dataValue) => dataValue.authorY}
          value={configObj?.authors}
          //filters already selected authors out of the initial dataset
          data={globalData.allAuthors.filter((author) => !configObj?.authors?.map((author) => author.label)?.includes(author.authorY))}
          config={{
            noOptionsMessage: () => "Type to search for authors...",
            menuPlacement: "top",
            defaultOptions: true,
            isMulti: true,
            tabIndex: 0,
            hideSelectedOptions: true
          }}
          onSelectedOptionsChange={handleAuthorsChange}
        ></SelectSearch>
      </label>
      <div className="italic text-xs mb-5 mx-2">
        Works published between the years... (inclusive)
        <RangeSlider
          onRangeChange={handleRangeChange}
          values={configObj.range}
          defaultRangePair={[1705, 1969]}
        ></RangeSlider>
      </div>
    </>
  );
}
