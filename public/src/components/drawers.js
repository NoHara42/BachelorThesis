import React, { useState } from "react";
import ExpandedNav from "./expandedNav";

export const LeftNavContext = React.createContext();
export const RightNavContext = React.createContext();
export const ExpandedNavContext = React.createContext();

export const DrawerStateType = {
  Closed: "Closed",
  Open: "Open",
  Expanded: "Expanded",
};

export default function Drawers(props) {
  const leftNavStateObj = ([leftNavState, setLeftNavState] = useState(
    DrawerStateType.Closed
  ));
  const rightNavStateObj = ([rightNavState, setRightNavState] = useState(
    DrawerStateType.Closed
  ));
  const expandedNavSelectionObj = ([
    expandedNavSelection,
    setExpandedNavSelection,
  ] = useState());

  return (
    <div className="drawer">
      <input id="left" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <div className="drawer drawer-end">
          <input id="right" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            <LeftNavContext.Provider value={leftNavStateObj}>
              <RightNavContext.Provider value={rightNavStateObj}>
                {props.content}
              </RightNavContext.Provider>
            </LeftNavContext.Provider>
          </div>
          <div className="drawer-side">
            <label htmlFor="right" className="drawer-overlay"></label>
            <ul className="menu overflow-y-auto w-80 bg-base-100 text-base-content">
              <RightNavContext.Provider value={rightNavStateObj}>
                <RightNav stateObj={rightNavStateObj} {...props}></RightNav>
              </RightNavContext.Provider>
            </ul>
          </div>
        </div>
      </div>
      <div className="drawer-side">
        <label htmlFor="left" className="drawer-overlay"></label>
        <ExpandedNavContext.Provider value={expandedNavSelectionObj}>
          <LeftNavContext.Provider value={leftNavStateObj}>
            <LeftNav stateObj={leftNavStateObj} {...props}></LeftNav>
          </LeftNavContext.Provider>
        </ExpandedNavContext.Provider>
      </div>
    </div>
  );
}

function LeftNav(props) {
  const navTemplate = (
    <div className="w-full overflow-y-auto grid grid-cols-3 lg:grid-cols-4 gap-4">
      <ul className="menu overflow-y-auto col-span-1 bg-base-100 text-base-content">
        {props.leftNav}
      </ul>
      <div
        htmlFor="left"
        className="drawer-button col-span-2 lg:col-span-3">
      </div>
    </div>
  );

  if (props.stateObj[0] == DrawerStateType.Closed) {
    return navTemplate;
  } else if (props.stateObj[0] == DrawerStateType.Open) {
    return navTemplate;
  } else if (props.stateObj[0] == DrawerStateType.Expanded) {
    return (
      <div className="w-full overflow-y-auto grid grid-cols-3 lg:grid-cols-4 gap-4">
        <ul className="menu bg-base-100 col-span-1 text-base-content">
          {props.leftNav}
        </ul>
        <div className="flex flex-col grow justify-between rounded-xl transparent transition col-span-2 lg:col-span-3 bg-base-100 my-4 mr-4 p-4 shadow-xl">
          <ExpandedNav {...expandedNavSelection}></ExpandedNav>
        </div>
      </div>
    );
  }
}

function RightNav(props) {}
