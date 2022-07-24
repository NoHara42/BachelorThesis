import React from 'react';

export default function NumberInput(props) {
  const handleChange = (change) => {
    props.onChange(change, props.label, props.tableName, props.type);
  }
  return (
    <div className="form-control">
      <label className="input-group w-full input-group-sm">
        <span>{props.label}</span>
        <input
          onChange={handleChange}
          type="number"
          placeholder="Type here..."
          className="input w-full input-bordered input-sm"
        />
      </label>
    </div>
  );
}
