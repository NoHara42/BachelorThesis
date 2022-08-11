import { RefreshIcon } from "@heroicons/react/solid";
import React, { useEffect, useState } from "react";

function deserialize(serializedJavascript) {
  return eval("(" + serializedJavascript + ")");
}

export default function ExpandedMetadataNav({ data }) {
  let dataObjs: { relatedAuthors: any; relatedOccurrences: any } = data?.data;
  const [configObj, setConfigObj] = useState(null);
  const [relatedAuthorsState, setRelatedAuthorsState] = useState(null);
  const [relatedOccurrencesState, setRelatedOccurrencesState] = useState(null);

  useEffect(() => {
    setConfigObj(deserialize(data?.config?.data));
    setRelatedAuthorsState(dataObjs?.relatedAuthors);
    setRelatedOccurrencesState(dataObjs?.relatedOccurrences);
  }, [data]);

  if(data == undefined) {
    return <RefreshIcon className="text-primary h-20 w-20 animate-spin"></RefreshIcon>;
  }
  return (
    <>
      <h5>Related book data: {configObj?.title}</h5>
      <div className="divider"></div>
      <div className="overflow-x-auto">
        {dataObjs && dataObjs.relatedAuthors.length > 0 && (
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
        <h5 className="mb-2">Occurrence(s):</h5>
        <div className="divider"></div>
        {dataObjs && dataObjs.relatedOccurrences.length > 0 && (
          <table className="table table-compact w-full">
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
