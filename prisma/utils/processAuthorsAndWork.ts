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

    // This list is incomplete, as we agreed only these values are within the scope of the project
    const listOfColumnNamesThatContainCommaSeparatedValues = ["Works", "Literature_Form", "Genre_x"];
    
    // transform semi-colon seperated values into an array... 
    result = objMap(result, (keyValuePair) => {
      if(listOfColumnNamesThatContainCommaSeparatedValues.includes(keyValuePair[0])) {
          return [keyValuePair[0], String(keyValuePair[1]).split(";")];
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