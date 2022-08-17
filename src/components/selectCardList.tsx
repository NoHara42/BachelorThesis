import React, { useContext, useEffect, useState } from "react";
import { ChevronLeftIcon } from "@heroicons/react/solid";
import { LeftNavContext, DrawerStateType, ExpandedNavContext } from "./drawers";
import { v4 as uuidv4 } from "uuid";

export function SelectCardList(props) {
  const [selectCardList, setSelectCardList] = useState([]);

  useEffect(() => {
    setSelectCardList(
      (props.data as Array<any>) &&
        props.data.map(
          (option, index) =>
            option && (
              <SelectCard
                key={option.id}
                id={option.id}
                value={option.value}
                label={option.label}
              >
                {option.label}
              </SelectCard>
            )
        )
    );
  }, [props.data]);

  let divider =
    selectCardList?.length > 0 ? <div className="divider"></div> : null;

  return (
    <>
      <div className="navbar bg-secondary">
        <div className="flex-1">
          <a className="ml-2 font-medium text-xl">Configure</a>
        </div>
        <div className="flex-none">
          <label
            htmlFor="left"
            className="btn btn-square btn-ghost drawer-button"
            onClick={() => {
              props.triggerAllPlotConfigRerender();
            }}
          >
            <ChevronLeftIcon className="w-6"></ChevronLeftIcon>
          </label>
        </div>
      </div>
      <div className="p-4 menu overflow-y-auto">
        {selectCardList.length > 0 ? (
          <>
            {selectCardList}
            {/* {(selectCardList.length > 1) ? 
              <>
                {divider}
                <div className="menu">
                  <SelectCard
                    key="generalConfig"
                    id="generalConfig"
                    value="generalConfig"
                    label="All Taxa"
                  >
                    General Configuration
                  </SelectCard>
                </div>
              </>
              : null
            } */}
          </>
        ) : (
          "You have not selected any taxa, go back and select a taxon to plot."
        )}
      </div>
    </>
  );
}

export function SelectCard(props) {
  const [leftNavState, setLeftNavState] = useContext(LeftNavContext);
  const [expandedNavSelection, setExpandedNavSelection] =
    useContext(ExpandedNavContext);

  const handleTaxonClick = () => {
    setLeftNavState(DrawerStateType.Expanded);
    setExpandedNavSelection({
      label: props.label,
      value: props.value,
      id: props.id,
    });
  };

  return (
    <li>
      <a onClick={handleTaxonClick}>{props.children}</a>
    </li>
  );
}
