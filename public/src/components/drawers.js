import React, { useState } from "react";

export const DrawerContext = React.createContext();

export default function Drawers(props) {
  toggleLeftNav = () => {
    console.log(drawerState);
    setDrawerState({
      leftNavExpanded: !drawerState.leftNavExpanded,
      rightNavExpanded: drawerState.rightNavExpanded,
      toggleLeftNav,
      toggleRightNav,
      showNav,
      closeNav,
    });
  };
  toggleRightNav = () => {
    setDrawerState({
      leftNavExpanded: drawerState.leftNavExpanded,
      rightNavExpanded: !drawerState.rightNavExpanded,
      toggleLeftNav,
      toggleRightNav,
      showNav,
      closeNav,
    });
  };
  showNav = (isNavExpanded, navType) => {
    if (!isNavExpanded) {
      if (navType == "left") {
        toggleLeftNav();
      } else if (navType == "right") {
        toggleRightNav();
      }
    }
  };
  closeNav = (isNavExpanded, navType) => {
    if (isNavExpanded) {
      if (navType == "left") {
        toggleLeftNav();
      } else if (navType == "right") {
        toggleRightNav();
      }
    }
  };

  const [drawerState, setDrawerState] = useState({
    leftNavExpanded: false,
    rightNavExpanded: false,
    toggleLeftNav,
    toggleRightNav,
    showNav,
    closeNav,
  });

  function LeftNav() {
    if (drawerState.leftNavExpanded) {
      return (
        <div className="drawer-side grid-cols-2">
          <label htmlFor="left" className="drawer-overlay order-none"></label>
          <ul className="menu overflow-y-auto w-full transition-all delay-150 ease-in-out duration-300 bg-base-100 text-base-content">
            {props.leftNav}
          </ul>
          <div className="bg-base-200 z-[999]">Config Menu</div>
        </div>
      );
    } else
      return (
        <div className="drawer-side grid-cols-1">
          <label htmlFor="left" className="drawer-overlay"></label>
          <ul className="menu col-span-1 overflow-y-auto w-80 transition-all delay-150 ease-in-out duration-300 bg-base-100 text-base-content">
            {props.leftNav}
          </ul>
        </div>
      );
  }

  function RightNav() {
    return (
      <div className="drawer-side">
        <label htmlFor="right" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
          {props.rightNav}
        </ul>
      </div>
    );
  }

  return (
    <DrawerContext.Provider value={drawerState}>
      <div className="drawer">
        <input id="left" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <div className="drawer drawer-end">
            <input id="right" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">{props.content}</div>
            <RightNav></RightNav>
          </div>
        </div>
        <LeftNav></LeftNav>
      </div>
    </DrawerContext.Provider>
  );
}
