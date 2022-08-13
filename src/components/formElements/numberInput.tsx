import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../app";
import RangeSlider from "./rangeSlider";

export default function NumberInput(props) {
  const globalData = useContext(GlobalContext);

  const [values, setValues] = useState(globalData.getFormValue(props.currentPlotId, props.tableName, props.formId) ?? props.minMax);

  const handleChange = (changeValue: [number,number]) => {
    props.onChange(changeValue, props.label, props.tableName, props.type);
    setValues(globalData.getFormValue(props.currentPlotId, props.tableName, props.formId));
  }

  return (
    <div className="pb-8 px-8">
      <RangeSlider
        onRangeChange={handleChange}
        values={values}
        defaultRangePair={props.minMax}
      ></RangeSlider>
    </div>
  );
}
