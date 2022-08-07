import React, { useEffect, useState } from "react";
import {
  SelectSearch,
  MoreButton,
  SelectCardList,
  Drawers,
} from "./components/exports";
import { v4 as uuidv4 } from "uuid";
import { AnnotationIcon } from "@heroicons/react/solid";
import { getViz } from ".";
import { debounce, debounceLeading } from "./utils/debounces";
import { ActionMeta, InputActionMeta } from "react-select";

export const GlobalContext = React.createContext(null);

export function App(props) {

  const defaultPlots = [
    { value: "dog", label: "Dog", id: uuidv4() },
    { value: "cat", label: "Cat", id: uuidv4() },
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
  
  const handleSelectedOptionsChange = (changes, {action, name, removedValue}) => {    
    console.log(changes, action,name,removedValue);

    switch(action) {
      case "remove-value":
        allPlotConfigs.delete(removedValue.id);
        getViz(allPlotConfigs);
      case "deselect-option":
        allPlotConfigs.delete(removedValue.id);
        getViz(allPlotConfigs);
      case "pop-value":
        allPlotConfigs.delete(removedValue.id);
        getViz(allPlotConfigs);  
      case "clear":
        allPlotConfigs.clear();
        getViz(allPlotConfigs);
      case "select-option":        
        setSelectedOptions({...selectedOptions, ...changes});
      default: 
        setSelectedOptions(changes.map((option) => ({
          id: option.id ?? option.value,
          label: option.label,
          value: option.label.toLowerCase()
        })));
      }
  };

  const savePlotConfig = (id, plotToSave) => {
    allPlotConfigs.set(id, plotToSave);
  }

  const saveDynChange = (currentPlotId, tableName, dynKey, dynValue) => {
    allPlotConfigs.get(currentPlotId)[tableName].set(dynKey, dynValue);
  }

  const generalConfigObj = { value: "generalConfig", label: "All Taxa", id: "generalConfig" };

  useEffect(() => {
    [...selectedOptions, generalConfigObj].map((option) => {                 
      if(!allPlotConfigs.has(option.id)) allPlotConfigs.set(option.id, { label: option.value, authors: null, range: [1705, 1969], Author: new Map(), Work: new Map() });
    });
  }, [selectedOptions]);

  useEffect(() => {
    console.log({selectedOptions}, {allPlotConfigs});
  });

  useEffect(() => {
    getViz(allPlotConfigs);
  }, [allPlotConfigs, selectedOptions]);

  window.addEventListener("resize", debounceLeading(() => getViz(allPlotConfigs), 1000));
  

  return (
    <GlobalContext.Provider value={{ allAuthors: props.allAuthors, allPlotConfigs, savePlotConfig, saveDynChange }}>
      <Drawers
        allPlotConfigs={allPlotConfigs}
        leftNav={<SelectCardList data={selectedOptions} />}
        rightNav={<>Right Nav</>}
        content={
          <>
            <header className="p-4">
              <a href="/" tabIndex={0}>
                <h1 className="text-4xl md:text-5xl">
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
              est. Aute commodo sit consectetur enim qui. Aute eu quis in cillum
              exercitation enim. Laboris labore nulla cillum incididunt Lorem
              incididunt minim sint aliqua do amet. Ea sint eu duis laborum ut
              est. Aute commodo sit consectetur enim qui. Aute eu quis in cillum
              exercitation enim. Laboris labore nulla cillum incididunt Lorem
              incididunt minim sint aliqua do amet. Ea sint eu duis laborum ut
              est.
              </div>
            </div>
          </>
        }
      ></Drawers>
    </GlobalContext.Provider>
  );
}
