import React, { useState } from "react";
import { Range } from "react-range";

const defaultRange = [1705, 1969];

export default function RangeSlider() {
  const [dateValues, setDateValues] = useState(defaultRange);

  return (
    <Range
      values={dateValues}
      step={1}
      min={defaultRange[0]}
      max={defaultRange[1]}
      onChange={setDateValues}
      renderTrack={({ props, children }) => (
        <div
          onMouseDown={props.onMouseDown}
          onTouchStart={props.onTouchStart}
          className="h-4 flex w-full"
        >
          <div
            ref={props.ref}
            className="h-2 w-full border-r-4 self-center bg-gray-200 shadow-inner rounded-xl"
          >
            {children}
          </div>
        </div>
      )}
      renderThumb={({ index, props, isDragged }) => (
        <div
          {...props}
          className={`h-5 w-5 flex ${isDragged && "shadow-xl border-primary border-2"} border-primary-light border transition rounded-lg bg-base-100 justify-center self-center`}>
          <div
            className={`absolute top-5 text-white font-medium text-sm p-1 rounded-lg bg-primary transition ${isDragged && "shadow-xl"}`}
          >
            {dateValues[index]}
          </div>
        </div>
      )}
    />
  );
}
