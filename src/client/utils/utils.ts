export const downloadAsJSON = (data, fileName) => {
  const triggerDownload = (imgURI) => {
    let a = document.createElement("a");

    a.setAttribute("download", fileName);
    a.setAttribute("href", imgURI);
    a.setAttribute("target", "_blank");

    a.click();
  };

  let blob = new Blob([JSON.stringify(data)], { type: "application/json;charset=utf-8" });
  let url = URL.createObjectURL(blob);
  triggerDownload(url);
};
