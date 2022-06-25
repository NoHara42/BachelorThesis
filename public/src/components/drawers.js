import React from "react";

export default function Drawers(props) {
  return (
    <div className="drawer">
      <input id="left" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <div className="drawer drawer-end">
          <input id="right" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">{props.content}</div>
          <div className="drawer-side">
            <label htmlFor="right" className="drawer-overlay"></label>
            <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
              {props.rightNav}
            </ul>
          </div>
        </div>
      </div>
      <div className="drawer-side">
        <label htmlFor="left" className="drawer-overlay"></label>
        <ul className="menu col-span-1 overflow-y-auto w-80 bg-base-100 text-base-content">
          {props.leftNav}
        </ul>
      </div>
    </div>
  );
}
