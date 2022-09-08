import React from "react";
import axios from "axios";
import * as ReactDOMClient from "react-dom/client";
import { App } from "./app";
import { DrawerStateType } from "./components/drawers";
import LineChart from "./components/LineChart";
import { toOptions } from "./components/formElements/selectSearch";
import serialize from "serialize-javascript";
import { v4 as uuidv4 } from "uuid";

const appElement = document.getElementById("app") as HTMLElement;
const root = ReactDOMClient.createRoot(appElement);

const sessionID = uuidv4();

let SERVER_URL;

if (import.meta.env.VITE_SERVER_URL) {
  SERVER_URL = import.meta.env.VITE_SERVER_URL;
} else SERVER_URL = "http://server:3000";

async function main() {
  await getAllAuthors().then(async (allAuthors) => {
    await getAllTaxa().then((allTaxa) => {
      root.render(<App allTaxa={allTaxa} allAuthors={allAuthors} />);
    });
  });
}

export function getAllTaxa() {
  let url = new URL("taxons", SERVER_URL).href;
  return new Promise((resolve) => {
    axios
      .get(url)
      .then((response) => {
        resolve(response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  });
}

export function getAllAuthors() {
  let url = new URL("authors", SERVER_URL).href;
  return new Promise((resolve) => {
    axios
      .get(url)
      .then((response) => {
        resolve(response?.data);
      })
      .catch((err) => {
        console.error(err);
      });
  });
}

export async function requestViz(
  params: Map<string, any> | null = null,
  context
) {
  // creates deep copy of params Map
  let paramsCopy = new Map(params);

  //removes generalConfig before sending to backend for processing the data
  paramsCopy.delete("generalConfig");

  let url = new URL("viz", SERVER_URL).href;
  let outlet = document.querySelector("#outlet") as HTMLElement;
  //Spinner until response arrives
  outlet.innerHTML =
    '<div class="flex justify-center items-center h-full"><svg xmlns="http://www.w3.org/2000/svg" class="animate-spin h-40 w-40 opacity-75" fill="none" viewBox="0 0 24 24" stroke="#93EBB4" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg></div>';

  return await axios
    .post(url, {
      config: serialize(paramsCopy),
    })
    .catch((error) => {
      // handle error
      console.log(error);
    })
    .then((response) => {
      // handle success
      type ProcessedData = {
        relativeLiteraryImportance: any;
        occId: string;
        year: Date;
      };

      //replaces outlet with the rendered linechart

      //@ts-ignore
      response?.data &&
        LineChart(params, context, "#outlet", response?.data, {
          width: outlet?.clientWidth,
          height: outlet?.clientHeight,
          x: (d: ProcessedData) => new Date(d.year),
          y: (d: ProcessedData) => d.relativeLiteraryImportance,
          z: (d: ProcessedData) => d.occId,
          yLabel: "WorkFreq per given year, taxon / WorkFreq per year",
        });
      return;
    });
}

type WorkFreqParams = {
  label: string;
  year: number;
};

export function requestWorkFreq(params: WorkFreqParams, config, context) {
  //Opens the right nav to show the content is being loaded
  context[0][1](null);
  context[1][1](DrawerStateType.Open);

  let url = new URL("work-freq", SERVER_URL).href;

  axios
    .post(url, {
      config: serialize({workFreqParams: params, allConfigs: config}),
    })
    .then((response) => {
      //sets the state of the rightNavMetadataObj to the response
      context[0][1](response?.data);
    })
    .catch((error) => {
      // handle error
      console.log(error);
    });
}

export function requestAssociatedMetadata(params: Object | null) {
  let url = new URL("associated-metadata", SERVER_URL).href;
  return axios
    .post(url, {
      config: serialize(params),
    })
    .then((response) => {
      //sets the state of the rightNavMetadataObj to the response
      return response;
    })
    .catch((error) => {
      // handle error
      console.log(error);
    });
}

export async function requestDistinctValuesOfColumn(
  tableName: string,
  columnName: string
) {
  let url = new URL("distinct-column-values", SERVER_URL)
    .href;
  return await axios
    .post(url, {
      config: serialize({ columnName, tableName }),
    })
    .catch((error) => {
      // handle error
      console.log(error);
    })
    .then((response) => {
      //@ts-ignore
      return response?.data;
    });
}

export async function requestRangeNumberValuesOfColumn(
  tableName: string,
  columnName: string
) {
  let url = new URL(
    "range-column-number-values",
    SERVER_URL
  ).href;
  return await axios
    .post(url, {
      config: serialize({ columnName, tableName }),
    })
    .catch((error) => {
      // handle error
      console.log(error);
    })
    .then((response) => {
      //@ts-ignore
      return response?.data;
    });
}

type RequestHeadersParams = {
  tableName?: string;
  excludeFunc: (any) => any;
  includeFunc: (any) => any;
};

export async function requestHeaders({
  tableName,
  excludeFunc,
  includeFunc,
}: RequestHeadersParams) {
  return axios
    .get(new URL("headers", SERVER_URL).href, {
      params: { tableName: tableName },
    })
    .then((response) => {
      let options = toOptions(
        response.data.filter((value) => !value.isId),
        (dataLabel) => dataLabel.name,
        (dataValue) => null,
        (metaData) => ({ type: metaData.type })
      )
        .filter(excludeFunc)
        .filter(includeFunc);
      return options;
    })
    .catch((err) => {
      console.error(err);
      return [];
    });
}

main();
