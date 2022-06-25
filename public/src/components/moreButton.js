import React from "react";
import { DotsHorizontalIcon } from "@heroicons/react/solid";

export default function MoreButton(props) {
  return (
    <label className="drawer-button flex items-center" htmlFor={props.drawerName}>
      <DotsHorizontalIcon
        data-tip={props.toolTipText}
        tabIndex={1}
        className="btn btn-circle tooltip tooltip-right btn-ghost btn-sm animate-pulse hover:animate-none text-primary"
      ></DotsHorizontalIcon>
    </label>
  );
}
