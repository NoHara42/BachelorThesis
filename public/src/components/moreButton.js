import React, { useContext } from "react";
import { DotsHorizontalIcon } from "@heroicons/react/solid";
import { DrawerStateType, LeftNavContext } from "./drawers";


export default function MoreButton(props) {
  const [leftNavState, setLeftNavState] = useContext(LeftNavContext);
  
  const handleClick = () => {
    setLeftNavState(DrawerStateType.Open);
  }
  return (
    <label className="flex items-center drawer-button" onClick={handleClick} htmlFor={props.drawerName}>
      <DotsHorizontalIcon
        data-tip={props.toolTipText}
        tabIndex={1}
        className="btn btn-circle tooltip tooltip-right btn-ghost btn-sm animate-pulse hover:animate-none text-primary"
      ></DotsHorizontalIcon>
    </label>
  );
}
