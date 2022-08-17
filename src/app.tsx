import { AnnotationIcon, DotsHorizontalIcon } from "@heroicons/react/solid";
import { range } from "d3-array";
import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { requestViz } from ".";
import { DataTable } from "./components/dataTable";
import { DrawerStateType } from "./components/drawers";
import {
  Drawers, MoreButton,
  SelectCardList, SelectSearch
} from "./components/exports";
import {
  debounce,
  useDebounce
} from "./utils/debounces";

export const GlobalContext = React.createContext(null);

export function App(props) {
  const defaultPlots = [
    // { value: "dog", label: "Dog", id: uuidv4() },
    // { value: "cat", label: "Cat", id: uuidv4() },
  ];

  const taxaSearchSelectConfig = {
    hideSelectedOptions: false,
    defaultValue: defaultPlots,
    isOptionSelected: () => false,
    isMulti: true,
    placeholder: "Select taxa to plot...",
  };

  const [allPlotConfigs, setAllPlotConfigs] = useState(new Map());
  const [selectedOptions, setSelectedOptions] = useState(defaultPlots);
  const rightNavMetadataStateObj = useState();
  const rightNavStateObj = useState(DrawerStateType.Closed);
  const [isGraphPresent, setIsGraphPresent] = useState(false);

  const handleSelectedOptionsChange = (
    changes,
    { action, name, removedValue }
  ) => {

    switch (action) {
      case "remove-value":
        allPlotConfigs.delete(removedValue.id);
        break;
      case "deselect-option":
        allPlotConfigs.delete(removedValue.id);
        break;
      case "pop-value":
        allPlotConfigs.delete(removedValue.id);
        break;
      case "clear":
        allPlotConfigs.clear();
        break;
      case "select-option":
        setSelectedOptions(
          changes.map((option) => ({
            id: option.id ?? option.value,
            label: option.label,
            value: option.label.toLowerCase(),
          }))
        );
        break;
    }
    setSelectedOptions(
      changes.map((option) => ({
        id: option.id ?? option.value,
        label: option.label,
        value: option.label.toLowerCase(),
      }))
    );
  };

  const savePlotConfig = (id, plotToSave) => {
    // // if generalConfig, save for all other configs if their value is undefined or null
    // if(id === "generalConfig") {
    //   allPlotConfigs.forEach((plotConfig, plotConfigKey) => {        
    //     (typeof plotConfig.generallyDefined === "undefined" || plotConfig.generallyDefined) && (() => {
    //       let {authors, ...plotConfigOmmittedAuthors} = plotConfig;
    //       let {range, ...plotConfigOmmittedRange} = plotConfig;

    //       if(!plotConfig.authors) {
    //         allPlotConfigs.set(plotConfigKey, {authors: plotToSave.authors, ...plotConfigOmmittedAuthors, generallyDefined: true});
    //       }
          
    //       if(plotConfig.range[0] === 1705 || plotConfig.range[1] === 1969) {
    //         //sets the generallyDefined flag if the config has not been individually set yet
    //         allPlotConfigs.set(plotConfigKey, {range: plotToSave.range, ...plotConfigOmmittedRange, generallyDefined: true});
    //       }
    //     })()
    //   })
    // } else {
      allPlotConfigs.set(id, plotToSave);
    // }
  };

  const saveDynChange = (currentPlotId, tableName, dynKey, dynValue) => {
    // // if generalConfig, save for all other configs if their value is undefined or null
    // if(currentPlotId === "generalConfig") {
    //   console.log("save dyn generalconfig");
      
    //   allPlotConfigs.forEach((plotConfig, key) => {
    //     //save if undefined or null
    //     if(Boolean(allPlotConfigs.get(key)[tableName].get(dynKey))) {
    //       allPlotConfigs.get(currentPlotId)[tableName].set(dynKey, dynValue);
    //     }
    //   });
    // } else {
      allPlotConfigs.get(currentPlotId)[tableName].set(dynKey, dynValue);
      //allPlotConfig state only rerendered when the drawer is closed.
      //trigger method is passed to selectCardlist
    // }
  };

  let rerenderEvent = new Event("rerender");
  const triggerAllPlotConfigRerender = () => {
    setIsGraphPresent(true);

    if (selectedOptions.length > 0) {
      dispatchEvent(rerenderEvent);
      setAllPlotConfigs(new Map(allPlotConfigs));
    }
  };

  const getFormValue = (currentPlotId, tableName, dynKey, dynValueId) => {
    return (
      allPlotConfigs?.get(currentPlotId)?.[tableName]?.get(dynKey)?.value ??
      null
    );
  };

  const generalConfigObj = {
    value: "generalConfig",
    label: "All Taxa",
    id: "generalConfig",
  };

  useEffect(() => {
    //fill newly created selectedOptions with default values
    selectedOptions.map((option) => {
      if (!allPlotConfigs.has(option.id)) {
        allPlotConfigs.set(option.id, {
          label: option.value,
          authors: null,
          range: [1705, 1969],
          Author: new Map(),
          Work: new Map(),
        });
      }
    });
    // add the generalConfigObj to the plot configs artificially
    allPlotConfigs.set(generalConfigObj.id, {
      label: generalConfigObj.label,
      authors: null,
      range: [1705, 1969],
      Author: new Map(),
      Work: new Map(),
    });
    triggerAllPlotConfigRerender();
  }, [selectedOptions]);

  useEffect(() => {
    console.log({ allPlotConfigs, selectedOptions });
  }, [allPlotConfigs, selectedOptions]);

  window.addEventListener(
    "resize",
    useDebounce(
      () =>
        requestViz(allPlotConfigs, [
          rightNavMetadataStateObj,
          rightNavStateObj,
        ]),
      1000
    )
  );

  window.addEventListener(
    "rerender",
    useDebounce(
      () =>
        requestViz(allPlotConfigs, [
          rightNavMetadataStateObj,
          rightNavStateObj,
        ]),
      1000
    )
  );

  const handleKeyDown = (e) => {
    if(e.code && e.code === "Enter") {
      triggerAllPlotConfigRerender();
    }    
  }

  let triggerDownload = (imgURI) => {
    let a = document.createElement("a");

    a.setAttribute("download", "graph.svg");
    a.setAttribute("href", imgURI);
    a.setAttribute("target", "_blank");

    a.click();
  };

  let save = () => {
    let vizContainer = document.querySelector("#viz-container");
    if (vizContainer) {
      let data = new XMLSerializer().serializeToString(vizContainer);
      let svgBlob = new Blob([data], { type: "image/svg+xml;charset=utf-8" });
      let url = URL.createObjectURL(svgBlob);
      triggerDownload(url);
    }
  };

  return (
    <GlobalContext.Provider
      value={{
        allAuthors: props.allAuthors,
        allPlotConfigs,
        savePlotConfig,
        saveDynChange,
        getFormValue,
      }}
    >
      <Drawers
        rightNavMetadataStateObj={rightNavMetadataStateObj}
        rightNavStateObj={rightNavStateObj}
        allPlotConfigs={allPlotConfigs}
        leftNav={
          <SelectCardList
            triggerAllPlotConfigRerender={triggerAllPlotConfigRerender}
            data={selectedOptions}
          />
        }
        rightNav={
          <DataTable
            rightNavStateObj={rightNavStateObj}
            data={rightNavMetadataStateObj[0]}
          ></DataTable>
        }
        content={
          <>
            <header className="p-4 w-full flex flex-row justify-between">
              <a href="/" tabIndex={0}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl">
                  BiL Explorer <span className="whitespace-nowrap">🐕🍃</span>
                </h1>
              </a>
              { isGraphPresent &&
              <button onClick={save} className="btn btn-lg btn-ghost">
                Export Graph
              </button>
              }
            </header>
            <div className="m-4 flex gap-4">
              <div className="w-[66%] max-w-xl">
                <SelectSearch
                  data={props.allTaxa}
                  labelFunc={(dataValue) =>
                    dataValue.occId.charAt(0).toUpperCase() +
                    dataValue.occId.slice(1)
                  }
                  onKeyDown={handleKeyDown}
                  onSelectedOptionsChange={handleSelectedOptionsChange}
                  config={taxaSearchSelectConfig}
                ></SelectSearch>
              </div>
              <MoreButton
                drawerName="left"
                toolTipText="Configure filtering for individual plots..."
              ></MoreButton>
            </div>
            <div id="outlet" className="m-4 grow">
              <div className="prose font-sans">
                <br></br>
                <AnnotationIcon className="w-10 animate-bounce"></AnnotationIcon>
                Welcome to the BiL (Biodiversity-in-Literature) explorer!
                <br />
                Above, you will see a searchable input box which you can use to
                create occurrence frequency plots for taxons. (Animal/plant
                names.)
                <br />
                Select a taxon to render a graph, after that - you can
                configure the graph by pressing the green three-dotted icon.{" "}
                <div className="inline-flex gap-2">
                  It looks like this:{" "}
                  <DotsHorizontalIcon className="h-6 w-6 text-primary"></DotsHorizontalIcon>
                </div>
                <br />
                When the graph is rendered, feel free to click on points of data
                (occurrence frequencies) to investigate which books and authors
                they relate to.
                <br />
                <br />
                This bachelor thesis project was produced during my time at the university of Leipzig, with help and guidance from Prof. Dr. Manuel Burghardt, Andreas Niekler, (Dr. Ing.), and Lars Langer. 
                <br />
                It builds upon the data produced by{" "}
                <a href="https://besjournals.onlinelibrary.wiley.com/doi/10.1002/pan3.10256">
                  this paper
                </a>
                .
                <br />
                Feel free to contact me{" "}
                <a href="&#x6d;&#x61;&#x69;&#x6c;&#x74;&#x6f;&#x3a;&#x63;&#x6f;&#x6e;&#x74;&#x61;&#x63;&#x74;&#x40;&#x6e;&#x6f;&#x68;&#x61;&#x72;&#x61;&#x2e;&#x6d;&#x65;?subject=Hey! - BiL Explorer">
                  here
                </a>
                .
                <br />
                <span className="italic">
                ~ Ned O'Hara
                </span>
              </div>
            </div>
          </>
        }
      ></Drawers>
    </GlobalContext.Provider>
  );
}
