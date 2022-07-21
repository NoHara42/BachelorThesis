import React, { useEffect, useState } from "react";
import {
  SelectSearch,
  MoreButton,
  SelectCardList,
  Drawers,
} from "./components/exports";
import { v4 as uuidv4 } from "uuid";
import { AnnotationIcon } from "@heroicons/react/solid";
import { toOptions } from "./components/formElements/selectSearch";

export const GlobalContext = React.createContext(null);

export function App(props) {
  const defaultPlots = [
    { value: "dog", label: "Dog", id: uuidv4() },
    { value: "cat", label: "Cat", id: uuidv4() },
  ];

  const mainConfig = {
    hideSelectedOptions: false,
    defaultValue: defaultPlots,
    isOptionSelected: () => false,
    isMulti: true,
    placeholder: "Select taxa to plot...",
  };

  const [selectedOptions, setSelectedOptions] = useState(defaultPlots);

  const allPlotConfigs = new Map();

  const handleSelectedOptionsChange = (changes) => {
    setSelectedOptions(toOptions(changes, (value) => value.label));
  };

  const fillMap = (options) => {
    options.map((option) => {
      if(!allPlotConfigs.has(option.id)) allPlotConfigs.set(option.id, { authors: null, range: null });
    });
    console.log(allPlotConfigs);
  };

  useEffect(() => {
    fillMap([...selectedOptions, { value: "generalConfig", label: "All Taxa", id: "generalConfig" }]);
  }, [selectedOptions]);

  return (
    <GlobalContext.Provider value={{ allAuthors: props.allAuthors }}>
      <Drawers
        allPlotConfigs={allPlotConfigs}
        leftNav={<SelectCardList data={selectedOptions} />}
        rightNav={<>Right Nav</>}
        content={
          <>
            <header className="p-4">
              <a href="/" tabIndex={0}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl">
                  Animal Studies Explorer 🐕🍃
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
                  selectedOptions={selectedOptions}
                  onSelectedOptionsChange={handleSelectedOptionsChange}
                  config={mainConfig}
                ></SelectSearch>
              </div>
              <MoreButton
                drawerName="left"
                toolTipText="Configure filtering for individual plots..."
              ></MoreButton>
            </div>
            <div id="outlet" className="m-4 prose font-sans">
              <br></br>
              <AnnotationIcon className="w-10 animate-bounce"></AnnotationIcon>
              This is some about information to help contextualise this tool.
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
          </>
        }
      ></Drawers>
    </GlobalContext.Provider>
  );
}
