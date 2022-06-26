import React, { useContext } from "react";
import { ChevronLeftIcon, XIcon } from "@heroicons/react/solid";
import { DrawerContext } from "./drawers";

export function SelectCard(props) {
  const drawerState = useContext(DrawerContext);

  const handleTaxonClick = (e) => {
    e.taxonId = props.key;
    drawerState.showNav(drawerState.leftNavExpanded, "left");
  };

  return (
    <li>
      <a onClick={handleTaxonClick}>{props.children}</a>
    </li>
  );
}

export function SelectCardList(props) {
  const drawerState = useContext(DrawerContext);

  const selectCardList = props.data.map(
    (option, index) =>
      option && (
        <SelectCard key={index}>
          {String(option)}
        </SelectCard>
      )
  );
  let divider =
    selectCardList.length > 0 ? <div className="divider"></div> : null;

  function SwapIcon() {
    return (
      <label
        htmlFor="left"
        className={`btn btn-square btn-ghost drawer-button swap swap-rotate ${
          drawerState.leftNavExpanded ? "swap-active" : ""
        }`}
      >
        <XIcon
          className="w-6 swap-on"
          onClick={drawerState.closeNav}
        ></XIcon>
        <ChevronLeftIcon className="w-6 swap-off"></ChevronLeftIcon>
      </label>
    );
  }

  return (
    <>
      <div className="navbar bg-secondary">
        <div className="flex-1">
          <a className="ml-2 font-medium text-xl">Configure</a>
        </div>
        <div className="flex-none">
          <SwapIcon></SwapIcon>
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
