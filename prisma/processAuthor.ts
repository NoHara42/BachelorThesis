
const processAuthor = async (chunk) => {
    let result;
    // replace all NA with null values
    result = await objMap(chunk, (keyValuePair) => {
        if(keyValuePair[1] == 'NA') {
            return [keyValuePair[0], null];
        } else {
            return keyValuePair;
        };
    });
    
    // cast all integer type titles to strings 
    result = await objMap(chunk, (keyValuePair) => {
        if(keyValuePair[0] == "Title" && keyValuePair[1] instanceof Number) {
            return ["Title", String(keyValuePair[1])];
        } else {
            return keyValuePair;
        };
    });

    return result;
}

function objMap(obj, func) {
    return Object.fromEntries(Object.entries(obj).map(([k, v]) => func([k, v])));
}
  
export default processAuthor;