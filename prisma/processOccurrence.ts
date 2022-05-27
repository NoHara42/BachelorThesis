import objMap from "./utils/helpers";

const processOccurrence = (chunk) => {
    let result;
    // replace all NA with null values
    result = objMap(chunk, (keyValuePair) => {
        if(keyValuePair[1] == 'NA') {
            return [keyValuePair[0], null];
        } else {
            return keyValuePair;
        };
    });

    return result;
}

export default processOccurrence;