import React from 'react';


import { debounceLeading } from "../../utils/debounces";

function DropDown(props) {
  const handleChange = (change) => {
    props.onChange(change, props.label, props.tableName, props.type);
  }
  return (
    <div className="form-control">
      <label className="input-group w-full input-group-sm">
        <span>{props.label}</span>
        <input type="text" onChange={debounceLeading(handleChange)} placeholder="Type here" className="input w-full input-bordered input-sm" />
      </label>
    </div>
  );
}

export default DropDown;