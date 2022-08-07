import objMap from "./helpers";

const processAuthorsAndWorks = (result) => {
    // replace all NA with null values
    result = objMap(result, (keyValuePair) => {
        if(keyValuePair[1] == 'NA') {
            return [keyValuePair[0], null];
        } else {
            return keyValuePair;
        };
    });
    
    // cast all integer type titles to strings 
    result = objMap(result, (keyValuePair) => {
        if(keyValuePair[0] == "Title" || keyValuePair[0] == "Work") {
            return [keyValuePair[0], String(keyValuePair[1])];
        } else {
            return keyValuePair;
        };
    });

    // transform semi-colon seperated "works" into array 
    result = objMap(result, (keyValuePair) => {
      if(keyValuePair[0] == "Works") {
          return [keyValuePair[0], keyValuePair[1].split(";")];
      } else {
          return keyValuePair;
      };
    });

    // clean Siblings string irregularity
    result = objMap(result, (keyValuePair) => {
        if(keyValuePair[0] == "Siblings" && keyValuePair[1] == "1 (?)") {
            return [keyValuePair[0], 1];
        } else {
            return keyValuePair;
        };
    });
    

    return result;
}

  
export default processAuthorsAndWorks;