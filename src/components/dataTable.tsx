import React, { LegacyRef, useContext, useEffect, useState } from "react";
import { ChevronRightIcon, RefreshIcon } from "@heroicons/react/solid";
import { DrawerStateType, ExpandedMetadataNavContext } from "./drawers";
import { requestAssociatedMetadata } from "..";

export function DataTable({ rightNavStateObj, data, ...props }) {
  const [rightNavState, setRightNavState] = rightNavStateObj;
  const [expandedNavMetadataSelection, setExpandedNavMetadataSelection] =
    useContext(ExpandedMetadataNavContext);
  const [selectedListIndex, setSelectedListIndex] = useState(null);

  let activeTr = null;

  return (
    <>
      <div className="navbar bg-secondary">
        <label
          onClick={(e) => {
            e.preventDefault();
            setRightNavState(DrawerStateType.Closed);
            setSelectedListIndex(null);
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
        {data == undefined ? (
          <RefreshIcon className=" text-primary-light h-20 w-20 animate-spin"></RefreshIcon>
        ) : (
          <>
            <h5 className="mb-4">{`\"${data?.[0]?.label}\" occurrences in literature in the year ${data?.[0]?.year}:`}</h5>
            <table className="table overflow-y-scroll overflow-x-clip">
              <thead>
                <tr>
                  <th>Count</th>
                  <th>Title</th>
                </tr>
              </thead>
              <tbody>
                {data?.map((dataObj, idx) => dataObj && (
                  <tr
                    key={idx}
                    className="hover hover:cursor-pointer"
                    onClick={() => {
                      setExpandedNavMetadataSelection(null);
                      setRightNavState(DrawerStateType.Expanded);
                      requestAssociatedMetadata({
                        label: dataObj.label,
                        year: dataObj.year,
                        title: dataObj.title,
                      }).then((data) => {
                        setExpandedNavMetadataSelection(data);
                        setSelectedListIndex(idx);
                      });
                    }}
                  >
                    {(idx == selectedListIndex) ? (
                      <>
                        <td className="bg-primary">{dataObj?.count}</td>
                        <td className="whitespace-normal bg-primary">
                          {dataObj?.title}
                        </td>
                      </>
                    ) : (
                      <>
                        <td>{dataObj?.count}</td>
                        <td className="whitespace-normal">{dataObj?.title}</td>
                      </>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        )}
      </div>
    </>
  );
}
