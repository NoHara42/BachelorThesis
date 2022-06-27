import React, { useContext } from "react";
import { ChevronLeftIcon, XIcon } from "@heroicons/react/solid";
import { LeftDrawerContext } from "./drawers";

export function SelectCardList(props) {
  const drawer = useContext(LeftDrawerContext);

  const selectCardList = props.data.map(
    (option, index) =>
      option && <SelectCard key={index}>{String(option)}</SelectCard>
  );
  let divider =
    selectCardList.length > 0 ? <div className="divider"></div> : null;

  const closeLeftNav = () => {
    drawer.closeNav("left");
  }

  return (
    <>
      <div className="navbar bg-secondary">
        <div className="flex-1">
          <a className="ml-2 font-medium text-xl">Configure</a>
        </div>
        <div className="flex-none">
          <label
            onClick={closeLeftNav}
            htmlFor="left"
            className="btn btn-square btn-ghost drawer-button"
          >
            <ChevronLeftIcon className="w-6 swap-off"></ChevronLeftIcon>
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

export function SelectCard(props) {
  const drawer = useContext(LeftDrawerContext);

  const showLeftNav = (e) => {
    e.taxonId = props.key;

  };

  return (
    <li>
      <a onClick={showLeftNav}>{props.children}</a>
    </li>
  );
}