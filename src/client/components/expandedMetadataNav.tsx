import { DocumentDownloadIcon, RefreshIcon } from "@heroicons/react/solid";
import React, { useEffect, useRef, useState } from "react";
import { deserialize } from "../../server/utils/utils";
import { downloadAsJSON } from "../utils/utils";
import Mark from "mark.js";

export default function ExpandedMetadataNav({ data }) {
  let dataObjs: { relatedAuthors: any; relatedOccurrences: any, relatedWork: any } = data?.data;

  const [requestMetadata, setRequestMetadata] = useState(null);

  let toMark = useRef();

  const handleDownload = () => {
    downloadAsJSON(data, "author-work_metadata.json");
  }

  useEffect(() => {
    if(data?.config?.data) {
      setRequestMetadata(deserialize(deserialize(data.config.data)?.config));
    }
  }, [data]);

  let markInstance;
  useEffect(() => {
    if(toMark?.current && requestMetadata?.label) {
      console.log(toMark.current, requestMetadata?.label);
      markInstance = new Mark(toMark.current);
      markInstance.mark(requestMetadata?.label);
    }
  }, [requestMetadata, toMark]);

  useEffect(() => {
    console.log(toMark);
  }, [toMark])

  if(data == undefined) {
    return <RefreshIcon className="text-primary-light h-20 w-20 animate-spin"></RefreshIcon>;
  }
  return (
    <>
      <div className="inline-flex w-full justify-between">
        <h5>Related book data: <em className="text-gray-500 font-normal ml-4">{requestMetadata?.title}</em></h5>
        <DocumentDownloadIcon onClick={handleDownload} className="h-8 w-8 text-primary animate-pulse cursor-pointer"></DocumentDownloadIcon>
      </div>
      <div className="divider"></div>
      <div className="overflow-x-auto">
        {dataObjs && dataObjs?.relatedAuthors.length > 0 && (
          <>
          <h5 className="mb-2">Author(s):</h5>
          <table className="table table-compact w-full">
            <thead>
              <tr>
                {Object.keys(dataObjs?.relatedAuthors[0]).map(
                  (authorKey, idx) => (
                    <th key={idx}>{authorKey}</th>
                  )
                )}
              </tr>
            </thead>
            <tbody>
              {dataObjs?.relatedAuthors?.map((author, idx) => (
                <tr key={idx + 10}>
                  {Object.values(author).map((authorValue, idx) => (
                    <td key={idx + 100}>{String(authorValue)}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          </>
        )}
        {dataObjs && (
          <>
          <h5 className="mb-2">Work:</h5>
          <table className="table table-compact w-full">
            <thead>
              <tr>
                {Object.keys(dataObjs?.relatedWork).map(
                  (workKey, idx) => (
                    <th key={idx}>{workKey}</th>
                  )
                )}
              </tr>
            </thead>
            <tbody>
              <tr>
                {Object.values(dataObjs?.relatedWork).map((workValue, idx) => (
                  <td key={idx + 100}>{String(workValue)}</td>
                ))}
              </tr>
            </tbody>
          </table>
          </>
        )}
        <h5 className="mb-2">Occurrence(s):</h5>
        <div className="divider"></div>
        {dataObjs && dataObjs.relatedOccurrences.length > 0 && (
          <table className="table table-compact w-full" ref={toMark}>
            <thead>
              <tr>
              </tr>
            </thead>
            <tbody>
              {dataObjs?.relatedOccurrences?.map((occurrence, idx) => (
                <tr key={idx + 200}>
                    <td className="whitespace-normal">{occurrence.sentence!}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
}
