import React, { useState } from "react";
import {
  MultiSelectSearch,
  MoreButton,
  SelectCardList,
  Drawers,
} from "./components/exports";
import { AnnotationIcon } from "@heroicons/react/solid";

const mainConfig = {
  isMulti: true,
  options: [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ],
};

export function App() {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const onSelectedOptionsChange = (value) => {
    setSelectedOptions(value);
  };

  return (
    <Drawers
      leftNav={<SelectCardList data={selectedOptions} />}
      rightNav={<>Right Nav</>}
      content={
        <>
          <header className="w-max p-4">
            <a href="/" tabIndex={0}>
              <h1>Animal Studies Explorer 🐕🍃</h1>
            </a>
          </header>
          <div className="m-4 flex gap-4">
            <div className="w-[400px]">
              <MultiSelectSearch
                tabIndex={1}
                config={mainConfig}
                selectedOptions={selectedOptions}
                onSelectedOptionsChange={onSelectedOptionsChange}
              ></MultiSelectSearch>
            </div>
            <MoreButton drawerName="left" toolTipText="Configure filtering for individual plots..."></MoreButton>
          </div>
          <div id="outlet" className="m-4 prose">
            <br></br>
            <AnnotationIcon className="w-10 animate-bounce"></AnnotationIcon>
            This is some about information to help contextualise this tool. Aute
            commodo sit consectetur enim qui. Aute eu quis in cillum
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
  );
}
