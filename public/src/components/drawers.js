import React, { useState, useContext, createContext } from "react";
import { Sidebar } from "primereact/sidebar";

export const LeftDrawerContext = createContext();
export const RightDrawerContext = createContext();

export default function Drawers(props) {
  const [leftDrawerVisible, setLeftDrawerVisible] = useState(false);
  const [rightDrawerVisible, setRightDrawerVisible] = useState(false);

  return (
    <RightDrawerContext.Provider value={rightDrawerVisible}>
      <LeftDrawerContext.Provider value={leftDrawerVisible}>
        <Sidebar
          visible={true}
          position="left"
          onHide={() => setDrawerVisible(false)}
        >
          {props.leftNav}
        </Sidebar>
        <Sidebar
          visible={rightDrawerVisible}
          position="right"
          onHide={() => setDrawerVisible(false)}
        >
          {props.rightNav}
        </Sidebar>
        <div>{props.content}</div>
      </LeftDrawerContext.Provider>
    </RightDrawerContext.Provider>
  );
}
