import React, { useContext } from "react";
import { ChevronRightIcon } from "@heroicons/react/solid";
import { DrawerStateType } from "./drawers";
import { requestAssociatedMetadata } from "..";

export function DataTable({ rightNavStateObj, data, ...props }) {
  const [rightNavState, setRightNavState] = rightNavStateObj;

  return (
    <>
      <div className="navbar bg-secondary">
        <label
          onClick={(e) => {
            e.preventDefault();
            setRightNavState(DrawerStateType.Closed);
          }}
          htmlFor="right"
          className="btn btn-square btn-ghost drawer-button"
        >
          <ChevronRightIcon className="w-6"></ChevronRightIcon>
        </label>
        <div className="flex-1">
          <a className="ml-2 font-medium text-xl">Explore</a>
        </div>
      </div>
      <div className="p-4">
        <h5 className="mb-4">{`"${data?.[0].label}" occurrences in literature in the year ${data?.[0].year}...`}</h5>
        <table className="table overflow-y-scroll overflow-x-clip">
          <thead>
            <tr>
              <th>Count</th>
              <th>Title</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((dataObj, idx) => (
              <tr key={idx} onClick={() => {
                requestAssociatedMetadata({label: dataObj.label, year: dataObj.year, title: dataObj.title}).then((data) => {
                  console.log(data);
                  
                });
              }}>
                <td>{dataObj?.count}</td>
                <td className="whitespace-normal">{dataObj?.title}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
