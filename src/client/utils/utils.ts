import Papa from 'papaparse';
const triggerDownload = (imgURI, fileName) => {
  let a = document.createElement("a");

  a.setAttribute("download", fileName);
  a.setAttribute("href", imgURI);
  a.setAttribute("target", "_blank");

  a.click();
};

export const downloadAsJSON = (data, fileName) => {
  let blob = new Blob([JSON.stringify(data)], { type: "application/json;charset=utf-8" });
  let url = URL.createObjectURL(blob);
  triggerDownload(url, fileName);
};

export function downloadAsCSV(data, fileName) {
  console.log(data);
  
  let blob = new Blob([Papa.unparse(data)], { type: "application/json;charset=utf-8" });
  let url = URL.createObjectURL(blob);
  triggerDownload(url, fileName);
}

export function deserialize(serializedJavascript) {
  try {
    return JSON.parse(serializedJavascript);
  } catch (err) {
    console.error("Error occurred while parsing JSON, trying with eval...");
    return eval( "(" + serializedJavascript + ")")
  }
}