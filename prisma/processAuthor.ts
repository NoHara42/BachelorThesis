
const processAuthor = (chunk) => {
    let result;
    result = objMap(chunk, (value) => {
        if(value == "NA") {
            return null;
        } else {
            return value
        };
    });
    console.log(result);
    return result;
}

function objMap(obj, func) {
    return Object.fromEntries(Object.entries(obj).map(([k, v]) => [k, func(v)]));
}
  
export default processAuthor;