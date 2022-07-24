import React, { useContext } from "react";
import { ChevronLeftIcon } from "@heroicons/react/solid";
import { LeftNavContext, DrawerStateType, ExpandedNavContext } from "./drawers";

export function SelectCardList(props) {

  let selectCardList = props.data?.map(
    (option, index) =>
      option && <SelectCard key={option.id} id={option.id} value={option.value} label={option.label}>{option.label}</SelectCard>
  );

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
            className="btn btn-square btn-ghost drawer-button">
            <ChevronLeftIcon className="w-6"></ChevronLeftIcon>
          </label>
        </div>
      </div>
      <div className="p-4 menu overflow-y-auto">
        {selectCardList}
        {divider}
        <div className="menu">
          <SelectCard key="generalConfig" id="generalConfig" value="generalConfig" label="All Taxa">General Configuration</SelectCard>
        </div>
      </div>
    </>
  );
}

export function SelectCard(props) {
  const [leftNavState, setLeftNavState] = useContext(LeftNavContext);
  const [expandedNavSelection, setExpandedNavSelection] = useContext(ExpandedNavContext);

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