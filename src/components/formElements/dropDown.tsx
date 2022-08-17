import React, { useContext, useEffect, useState } from "react";
import { requestDistinctValuesOfColumn } from "../..";
import { GlobalContext } from "../../app";

function DropDown(props) {
  const globalData = useContext(GlobalContext);

  const [defaultValue, setDefaultValue] = useState(
    globalData.getFormValue(props.currentPlotId, props.tableName, props.formId)
  );
  const [distinctValues, setDistinctValues] = useState([]);

  useEffect(() => {
    (async () => {
      setDistinctValues(
        await requestDistinctValuesOfColumn(props.tableName, props.label)
      );
    })();
  }, []);

  const handleChange = (change) => {
    const changeValue =
      change.target.value == "No selection" ? undefined : change.target.value;
    setDefaultValue(changeValue);
    props.onChange(changeValue, props.label, props.tableName, props.type);
  };

  return (
    <>
      <label className="text-xs italic">{props.label}</label>
      <select
        value={defaultValue ?? "No selection"}
        onChange={handleChange}
        className="select select-bordered w-full"
      >
        <option value={undefined}>No selection</option>
        {distinctValues.length > 0 &&
          distinctValues?.map(
            (value, idx) =>
              value && (
                <option key={idx} value={value} defaultValue={defaultValue}>
                  {value}
                </option>
              )
          )}
      </select>
    </>
  );
}

export default DropDown;
