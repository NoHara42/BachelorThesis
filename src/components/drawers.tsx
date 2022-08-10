import React, { useContext, useEffect, useRef, useState } from "react";
import ExpandedNav from "./expandedNav";

declare module 'react' {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    // extends React's HTMLAttributes, htmlFor for some reason not typed
    htmlFor?: string;
  }
}

export const LeftNavContext = React.createContext(null);
export const RightNavContext = React.createContext(null);
export const ExpandedNavContext = React.createContext(null);

export const DrawerStateType = {
  Closed: "Closed",
  Open: "Open",
  Expanded: "Expanded",
};

export default function Drawers({rightNavMetadataStateObj, rightNavStateObj, ...props}: any) {
  const [rightNavState, setRightNavState] = rightNavStateObj;
  const [rightNavMetadata, setRightNavMetadata] = rightNavMetadataStateObj;
  const [leftNavState, setLeftNavState] = useState(DrawerStateType.Closed);

  const leftDrawerRef = useRef();
  const rightDrawerRef = useRef();

  useEffect(() => {
    if(rightNavMetadata !== undefined) setRightNavState(DrawerStateType.Open);
  }, [rightNavMetadata]);

  useEffect(() => {
    console.log("rightDrawerState",(rightDrawerRef.current as HTMLInputElement).checked);
    (rightDrawerRef.current as HTMLInputElement).checked = (rightNavState === DrawerStateType.Closed ? false : true);
  }, [rightNavState]);

  useEffect(() => {
    console.log({leftNavState, rightNavState, rightNavMetadata});
  })

  // Contains the currently selected plot to configure as an object containing:
  // * id
  // * value
  // * label 
  const [expandedNavSelection, setExpandedNavSelection] = useState();

  return (
    <div className="drawer">
      <input id="left" ref={leftDrawerRef} type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <div className="drawer drawer-end">
          <input id="right" ref={rightDrawerRef} type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col">
            <LeftNavContext.Provider value={[leftNavState, setLeftNavState]}>
              <RightNavContext.Provider
                value={[rightNavState, setRightNavState]}
              >
                {props.content}
              </RightNavContext.Provider>
            </LeftNavContext.Provider>
          </div>
          <div className="drawer-side">
            <label
              onClick={(e) => {
                e.preventDefault();
                setRightNavState(DrawerStateType.Closed);
              }}
              htmlFor="right" 
              className="drawer-overlay"></label>
            <ul className="menu overflow-y-auto overflow-x-clip w-full text-base-content">
              <RightNavContext.Provider
                value={[rightNavState, setRightNavState]}
              >
                <RightNav
                  stateObj={[rightNavState, setRightNavState]}
                  {...props}
                ></RightNav>
              </RightNavContext.Provider>
            </ul>
          </div>
        </div>
      </div>
      <div className="drawer-side">
        <label htmlFor="left" className="drawer-overlay"></label>
        <ExpandedNavContext.Provider value={[expandedNavSelection, setExpandedNavSelection]}>
          <LeftNavContext.Provider value={[leftNavState, setLeftNavState]}>
            <LeftNav
              stateObj={[leftNavState, setLeftNavState]}
              {...props}
            ></LeftNav>
          </LeftNavContext.Provider>
        </ExpandedNavContext.Provider>
      </div>
    </div>
  );
}

function LeftNav(props) {
  const [expandedNavSelection, setExpandedNavSelection] = useContext(ExpandedNavContext);
  
  const navTemplate = (
    <div className="w-full overflow-y-auto grid grid-cols-3 lg:grid-cols-4 gap-4">
      <ul className="menu overflow-y-auto col-span-1 bg-base-100 text-base-content">
        {props.leftNav}
      </ul>
      <div
        htmlFor={"left"}
        onClick={(e) => {
          e.preventDefault();
          props.stateObj[1](DrawerStateType.Closed);
        }}
        className="drawer-button col-span-2 lg:col-span-3"
      ></div>
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
        <div className="flex overflow-y-clip flex-col grow justify-between rounded-xl transparent transition col-span-2 lg:col-span-3 bg-base-100 my-4 mr-4 p-4 shadow-xl">
          <ExpandedNav {...expandedNavSelection}></ExpandedNav>
        </div>
      </div>
    );
  }
}

function RightNav(props) {
  const navTemplate = (
    <div className="w-full grid grid-cols-2 overflow-y-auto">
      <div
        htmlFor={"right"}
        className="drawer-button"
      ></div>
      <ul className="menu overflow-y-auto col-span-1 bg-base-100 text-base-content">
        {props.rightNav}
      </ul>
    </div>
  );

  if (props.stateObj[0] === DrawerStateType.Closed) {
    return navTemplate;
  } else if (props.stateObj[0] === DrawerStateType.Open) {
    return navTemplate;
  } else if (props.stateObj[0] === DrawerStateType.Expanded) {
    return (
      <div className="w-full overflow-y-auto grid grid-cols-2 gap-4">
        <div className="flex overflow-y-clip flex-col grow justify-between rounded-xl transparent transition col-span-1 bg-base-100 my-4 mr-4 p-4 shadow-xl">
          This is the expanded right nav
        </div>
        <ul className="menu bg-base-100 col-span-1 text-base-content">
          {props.rightNav}
        </ul>
      </div>
    );
  }
}
