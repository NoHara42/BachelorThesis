import React, { useContext, useEffect, useState } from "react";
import {
  SelectSearch,
  MoreButton,
  SelectCardList,
  Drawers,
} from "./components/exports";
import { v4 as uuidv4 } from "uuid";
import { AnnotationIcon } from "@heroicons/react/solid";
import { requestViz as requestViz } from ".";
import {
  debounce,
  debounceLeading,
  throttle,
  useDebounce,
} from "./utils/debounces";
import { DataTable } from "./components/dataTable";
import { DrawerStateType } from "./components/drawers";

export const GlobalContext = React.createContext(null);

export function App(props) {
  const defaultPlots = [];
  // [
  //   { value: "dog", label: "Dog", id: uuidv4() },
  //   { value: "cat", label: "Cat", id: uuidv4() },
  // ];

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

  const handleSelectedOptionsChange = (
    changes,
    { action, name, removedValue }
  ) => {
    console.log(changes, action, name, removedValue);

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
    triggerAllPlotConfigRerender();
  };

  const savePlotConfig = (id, plotToSave) => {
    allPlotConfigs.set(id, plotToSave);
  };

  const saveDynChange = (currentPlotId, tableName, dynKey, dynValue) => {
    allPlotConfigs.get(currentPlotId)[tableName].set(dynKey, dynValue);
    //allPlotConfig state only rerendered when the drawer is closed.
    //trigger method is passed to selectCardlist
  };


  let rerenderEvent = new Event("rerender");

  const triggerAllPlotConfigRerender = () => {
    dispatchEvent(rerenderEvent);
    console.log("dispatched Rerender Event");

    setAllPlotConfigs(new Map(allPlotConfigs));
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
    [...selectedOptions, generalConfigObj].map((option) => {
      if (!allPlotConfigs.has(option.id))
        allPlotConfigs.set(option.id, {
          label: option.value,
          authors: null,
          range: [1705, 1969],
          Author: new Map(),
          Work: new Map(),
        });
    });
  }, [selectedOptions]);

  useEffect(() => {
    console.log({ allPlotConfigs });
  }, [allPlotConfigs]);

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
            <header className="p-4">
              <a href="/" tabIndex={0}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl">
                  BiL Explorer <span className="whitespace-nowrap">🐕🍃</span>
                </h1>
              </a>
            </header>
            <div className="m-4 flex gap-4">
              <div className="w-[66%] max-w-xl">
                <SelectSearch
                  data={props.allTaxa}
                  labelFunc={(dataValue) =>
                    dataValue.occId.charAt(0).toUpperCase() +
                    dataValue.occId.slice(1)
                  }
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
                This is some about information to help contextualise this tool.
                <br />
                Aute commodo sit consectetur enim qui. Aute eu quis in cillum
                exercitation enim. Laboris labore nulla cillum incididunt Lorem
                incididunt minim sint aliqua do amet. Ea sint eu duis laborum ut
                est. Aute commodo sit consectetur enim qui. Aute eu quis in
                cillum exercitation enim. Laboris labore nulla cillum incididunt
                Lorem incididunt minim sint aliqua do amet. Ea sint eu duis
                laborum ut est. Aute commodo sit consectetur enim qui. Aute eu
                quis in cillum exercitation enim. Laboris labore nulla cillum
                incididunt Lorem incididunt minim sint aliqua do amet. Ea sint
                eu duis laborum ut est.
              </div>
            </div>
          </>
        }
      ></Drawers>
    </GlobalContext.Provider>
  );
}
