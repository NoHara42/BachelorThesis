import React from "react";
import { ChevronRightIcon } from "@heroicons/react/solid";

export function SelectCard(props) {
  function handleClick() {
    /*
      TODO: send option in props to drawer parent to widen
      the sidenav to configure the plot corresponding to the option
    */
  }
  return (
    <li>
      <a onClick={handleClick}>{props.children}</a>
    </li>
  );
}

export function SelectCardList(props) {
  const selectCardList = props.data.map(
    (option, index) =>
      option && <SelectCard key={index}>{String(option)}</SelectCard>
  );
  let divider;
  if (selectCardList.length > 0) {
    divider = <div className="divider"></div>;
  }

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
          >
            <ChevronRightIcon className="w-6"></ChevronRightIcon>
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
