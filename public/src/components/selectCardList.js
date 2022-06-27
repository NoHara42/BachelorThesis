import React, { useContext } from "react";
import { ChevronLeftIcon } from "@heroicons/react/solid";
import { LeftNavContext, DrawerStateType } from "./drawers";

export function SelectCard(props) {
  const [leftNavState, setLeftNavState] = useContext(LeftNavContext);

  const handleTaxonClick = (e) => {
    e.taxonId = props.key;
    setLeftNavState(DrawerStateType.Expanded);
  };

  return (
    <li>
      {/* TODO: figure out the selection logic and apply class when selected */}
      <a onClick={handleTaxonClick}>{props.children}</a>
    </li>
  );
}

export function SelectCardList(props) {
  const [leftNavState, setLeftNavState] = useContext(LeftNavContext);

  const selectCardList = props.data.map(
    (option, index) =>
      option && <SelectCard key={index}>{String(option)}</SelectCard>
  );

  let divider =
    selectCardList.length > 0 ? <div className="divider"></div> : null;

  return (
    <>
      <div className="navbar bg-secondary">
        <div className="flex-1">
          <a className="ml-2 font-medium text-xl">Configure</a>
        </div>
        <div className="flex-none">
          <label
            htmlFor="left"
            className="btn btn-square btn-ghost drawer-button">
            <ChevronLeftIcon className="w-6"></ChevronLeftIcon>
          </label>
        </div>
      </div>
      <div className="p-4 menu">
        {selectCardList}
        {divider}
        <div className="menu">
          <SelectCard>General Configuration</SelectCard>
        </div>
      </div>
    </>
  );
}
