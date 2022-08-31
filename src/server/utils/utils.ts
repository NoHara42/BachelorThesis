export function deserialize(serializedJavascript) {
  try {
    return JSON.parse(serializedJavascript);
  } catch (err) {
    console.error("Error occurred while parsing JSON, trying with eval...");
    return eval( "(" + serializedJavascript + ")")
  }
}

export function convertToCSV(arr) {
  const array = [Object.keys(arr[0])].concat(arr)

  return array.map(it => {
    return Object.values(it).toString()
  }).join('\n')
}