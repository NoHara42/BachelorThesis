import React, { useContext, useEffect, useRef, useState } from "react";
import ExpandedMetadataNav from "./expandedMetadataNav";
import ExpandedNav from "./expandedNav";

export const LeftNavContext = React.createContext(null);
export const RightNavContext = React.createContext(null);
export const ExpandedNavContext = React.createContext(null);
export const ExpandedMetadataNavContext = React.createContext(null);

export const DrawerStateType = {
  Closed: "Closed",
  Open: "Open",
  Expanded: "Expanded",
};

export default function Drawers({
  rightNavMetadataStateObj,
  rightNavStateObj,
  ...props
}: any) {
  const [rightNavState, setRightNavState] = rightNavStateObj;
  const [rightNavMetadata, setRightNavMetadata] = rightNavMetadataStateObj;
  const [leftNavState, setLeftNavState] = useState(DrawerStateType.Closed);

  const leftDrawerRef = useRef();
  const rightDrawerRef = useRef();

  useEffect(() => {
    if (rightNavMetadata !== undefined) setRightNavState(DrawerStateType.Open);
  }, [rightNavMetadata]);

  useEffect(() => {
    (rightDrawerRef.current as HTMLInputElement).checked =
      rightNavState === DrawerStateType.Closed ? false : true;
  }, [rightNavState]);

  // Contains the currently selected plot to configure as an object containing:
  // * id
  // * value
  // * label
  const [expandedNavSelection, setExpandedNavSelection] = useState();
  const [expandedNavMetadataSelection, setExpandedNavMetadataSelection] =
    useState();

  return (
    <div className="drawer">
      <input
        id="left"
        ref={leftDrawerRef}
        type="checkbox"
        className="drawer-toggle"
      />
      <div className="drawer-content !overflow-y-hidden">
        <div className="drawer drawer-end">
          <input
            id="right"
            ref={rightDrawerRef}
            type="checkbox"
            className="drawer-toggle"
          />
          <div className="drawer-content flex flex-col !overflow-y-hidden">
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
              htmlFor="right"
              onClick={(e) => {
                e.preventDefault();
                setRightNavState(DrawerStateType.Closed);
              }}
              className="drawer-overlay"
            ></label>
            <ul className="menu overflow-y-auto overflow-x-clip w-full text-base-content ">
              <ExpandedMetadataNavContext.Provider
                value={[
                  expandedNavMetadataSelection,
                  setExpandedNavMetadataSelection,
                ]}
              >
                <RightNavContext.Provider
                  value={[rightNavState, setRightNavState]}
                >
                  <RightNav
                    stateObj={[rightNavState, setRightNavState]}
                    {...props}
                  ></RightNav>
                </RightNavContext.Provider>
              </ExpandedMetadataNavContext.Provider>
            </ul>
          </div>
        </div>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="left"
          onClick={(e) => {
            e.preventDefault();
            setLeftNavState(DrawerStateType.Closed);
          }}
          className="drawer-overlay"
        ></label>
        <ExpandedNavContext.Provider
          value={[expandedNavSelection, setExpandedNavSelection]}
        >
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
  const [expandedNavSelection, setExpandedNavSelection] =
    useContext(ExpandedNavContext);

  const navTemplate = (
    <div className="w-full overflow-y-auto grid grid-cols-3 lg:grid-cols-4 gap-4">
      <ul className="menu overflow-y-auto col-span-1 bg-base-100 text-base-content">
        {props.leftNav}
      </ul>
      <label
        htmlFor="left"
        className="drawer-button col-span-2 lg:col-span-3"
      ></label>
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
  const [expandedNavMetadataSelection, setExpandedNavMetadataSelection] =
    useContext(ExpandedMetadataNavContext);

  const navTemplate = (
    <div className="w-full h-full grid grid-cols-2 overflow-y-auto">
      <label htmlFor="right" className="drawer-button"></label>
      <ul className="menu overflow-y-auto col-span-1 bg-base-100 text-base-content h-screen">
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
      <div className="w-full overflow-y-auto grid grid-cols-2">
        <div className="overflow-y-clip justify-between rounded-xl transparent transition col-span-1 bg-base-100 m-4 p-4 shadow-xl">
          <ExpandedMetadataNav
            data={expandedNavMetadataSelection}
          ></ExpandedMetadataNav>
        </div>
        <ul className="menu bg-base-100 col-span-1 text-base-content">
          {props.rightNav}
        </ul>
      </div>
    );
  }
}
