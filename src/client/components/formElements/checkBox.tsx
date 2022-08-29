import React from 'react';

function CheckBox(props) {
  const handleChange = (change) => {
    props.onChange(change.target.value, props.label, props.tableName, props.type);
  }
  return (
    <div className="form-control">
      <label className="label cursor-pointer">
        <span className="label-text">{props.label}</span> 
        <input type="checkbox" onChange={handleChange} defaultValue={props.defaultValue} checked={false} className="checkbox w-full checkbox-primary checkbox-sm" />
      </label>
    </div>
  );
}

export default CheckBox;