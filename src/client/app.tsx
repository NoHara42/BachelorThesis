import { AnnotationIcon, DotsHorizontalIcon } from "@heroicons/react/solid";
import React, { useEffect, useState } from "react";
import { requestViz } from ".";
import { DataTable } from "./components/dataTable";
import { DrawerStateType } from "./components/drawers";
import {
  Drawers, MoreButton,
  SelectCardList, SelectSearch
} from "./components/exports";
import {
  useDebounce
} from "./utils/debounces";
import "./styles.css";

export const GlobalContext = React.createContext(null);

export function App(props) {
  const defaultPlots = [
    // for testing
    // { value: "dog", label: "Dog", id: uuidv4() },
    // { value: "cat", label: "Cat", id: uuidv4() },
  ];

  const taxaSearchSelectConfig = {
    hideSelectedOptions: false,
    defaultValue: defaultPlots,
    isOptionSelected: () => false,
    isMulti: true,
    placeholder: "Select taxa to plot...",
    noOptionsMessage: () => "Type to search for taxa..."
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
    allPlotConfigs.set(id, plotToSave);
  };

  const saveDynChange = (currentPlotId, tableName, dynKey, dynValue) => {
    allPlotConfigs.get(currentPlotId)[tableName].set(dynKey, dynValue);
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

  const save = () => {
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
                  filterFunc={((option, inputValue) =>
                    inputValue !== "" && (option.label.toLowerCase().includes(inputValue.toLowerCase())) 
                  )}
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
                For a complete, unique list of taxons that are available to this app, <a href="https://github.com/NoHara42/BachelorThesis/unique-taxons.csv">click here.</a> 
                <br />
                See the paper that relates to the creation of this app <a href="https://docs.google.com/document/d/16a-4Gt8Qx1sqJ7BUxUJGsayCfc5emojmtfn9YFADODQ/edit?usp=sharing">here</a>.
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
