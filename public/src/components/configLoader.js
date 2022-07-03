import { PlusIcon } from "@heroicons/react/solid";
import axios from "axios";
import React, { useState } from "react";
import { SelectSearchAsync } from "./exports";

const defaultConfigs = [];

export function AddConfigButton(props) {
  return (
    <div
      className="dropdown tooltip tooltip-right"
      data-tip={`Add ${props.tableName} filter parameter`}
    >
      <PlusIcon
        tabIndex={0}
        className="btn btn-square btn-ghost btn-sm text-primary m-1"
      ></PlusIcon>
      <label className="dropdown-content shadow-xl w-52">
        <SelectSearchAsync param={{"tableName": props.tableName}} endpoint={"headers"} />
      </label>
    </div>
  );
}

export default function ConfigLoader(props) {
  const [loadedConfigs, setLoadedConfigs] = useState(defaultConfigs);
  const configTemplates = loadedConfigs.map((value) => (
    <tbody>
      <tr>
        <td>{value}</td>
      </tr>
    </tbody>
  ));


  return (
    <div className="flex flex-row flex-wrap gap-2">
      {configTemplates}
      <AddConfigButton tableName={props.tableName}></AddConfigButton>
    </div>
  );
}
