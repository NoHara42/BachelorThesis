import React, { useContext } from "react";
import * as ReactDOMClient from "react-dom/client";
import { App } from "./app";
import axios from "axios";
import serialize from "serialize-javascript";
import LineChart from "./components/LineChart";
import { DrawerStateType } from "./components/drawers";

const appElement = document.getElementById("app") as HTMLElement;
const root = ReactDOMClient.createRoot(appElement);


export const getAllTaxa = () => {
  let url = new URL("taxons", process.env.SERVER_URL).href;
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
};

export const getAllAuthors = () => {
  let url = new URL("authors", process.env.SERVER_URL).href;
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
};

async function main() {
  await getAllAuthors().then(async (allAuthors) => {
    await getAllTaxa().then((allTaxa) => {                
      root.render(<App allTaxa={allTaxa} allAuthors={allAuthors} />);
    });
  });
}
main();

export async function requestViz(params: Map<string, any> | null = null, context) {
  //removes generalConfig before sending to backend for processing the data
  params.delete("generalConfig");
  let url = new URL("viz", process.env.SERVER_URL).href;
  let outlet = document.querySelector("#outlet") as HTMLElement;
  //Spinner until response arrives
  outlet.innerHTML =
    '<div class="flex justify-center items-center h-full"><svg xmlns="http://www.w3.org/2000/svg" class="animate-spin h-40 w-40 opacity-75" fill="none" viewBox="0 0 24 24" stroke="#93EBB4" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg></div>';
  
  return await axios
    .post(url, {
      config: serialize(params),
    })
    .catch((error) => {
      // handle error
      console.log(error);
    })
    .then((response) => {
      // handle success
      type ProcessedData = {
        occId: string;
        year: Date;
        count: number;
      };
            
      //replaces outlet with the rendered linechart
      
      //@ts-ignore
      response?.data && LineChart(context, "#outlet", response?.data, {
        width: outlet?.clientWidth,
        height: outlet?.clientHeight,
        x: (d: ProcessedData) => new Date(d.year),
        y: (d: ProcessedData) => d.count,
        z: (d: ProcessedData) => d.occId,
        yLabel: "Absolute no. of Occurrences",
      });
      return;
    })
}

export function requestWorkFreq(params: Object | null, context) {
  //Opens the right nav to show the content is being loaded
  context[0][1](null);
  context[1][1](DrawerStateType.Open);

  let url = new URL("workfreq", process.env.SERVER_URL).href;
  
  axios
    .post(url, {
      config: serialize(params),
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
  
  let url = new URL("associatedmetadata", process.env.SERVER_URL).href;
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


export async function requestDistinctValuesOfColumn(tableName: string, columnName: string) {
  
  let url = new URL("distinct-column-values", process.env.SERVER_URL).href;
  return await axios
    .post(url, {
      config: serialize({columnName, tableName}),
    }).catch((error) => {
      // handle error
      console.log(error);
    })
    .then((response) => {
      //@ts-ignore
      return response?.data;
    });
}


export async function requestRangeNumberValuesOfColumn(tableName: string, columnName: string) {
  
  let url = new URL("range-column-number-values", process.env.SERVER_URL).href;
  return await axios
    .post(url, {
      config: serialize({columnName, tableName}),
    }).catch((error) => {
      // handle error
      console.log(error);
    })
    .then((response) => {
      //@ts-ignore
      return response?.data;
    });
}