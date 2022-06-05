import objMap from "./helpers";

const processOccurrence = (result) => {
    // replace all NA with null values
    return objMap(result, (keyValuePair) => {
        if(keyValuePair[1] == 'NA') {
            return [keyValuePair[0], null];
        } else {
            return keyValuePair;
        };
    });
}

export default processOccurrence;