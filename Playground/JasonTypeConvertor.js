// Transform JSON
// Create a service that translates a JSON payload such that its string values are converted to the proper type.

// For example:

// "true" should be converted to true
// "20" should be converted to 20 (see examples below)
// Input:

// Given a user makes a POST request to https://conversion-service/translate_json

// {
//   "name": "John Smith",
//   "age": "27",
//   "lovesApplyBoard": "true",
//   "favoriteColors": ["green", "blue", "red"],
//   "favoriteNumber": "null",
//   "birth": {
//     "location": "Kitchener",
//     "year": "1990"
//   }
// }
// Result:

// The user expects to receive a response translated as follows

// {
//   "name": "John Smith",
//   "age": 27,
//   "lovesApplyBoard": true,
//   "favoriteColors": ["green", "blue", "red"],
//   "favoriteNumber": null,
//   "birth": {
//     "location": "Kitchener",
//     "year": 1990
//   }
// }

const parseJson = (json) =>{
    
    function convertStr(property){
        
        let isTrue = property.toString().toUpperCase() == "TRUE";
        if(isTrue){
            return isTrue;
        }
        
        let isFalse = property.toString().toUpperCase() == "FALSE";
        if(isFalse){
            return false;
        }
        if(!isNaN(property)){
            return parseInt(property);
        }
        if(typeof(property) == 'string'){
            return property;
        }
        
        if(typeof(property) == 'object'){
            return parseJson(property);
        }

        return null;
    }
    
    
    for(const prop in json){
        let property = json[prop];
        
        json[prop] = convertStr(property);

        if(Array.isArray(property)){
            for(const idx in property){
                json[prop][idx] = convertStr(json[prop][idx]);
            }
        }
        
    }
    return json;
}

const input = {
    "name": "test",
    "number": {
        "int": "456",
        "true_bool": "true",
        "false_bool": "false"
    },
    "list_int": [ 1, 2 ,3, 5],
    "list_str": [ "Babak", "Ansari", "Jaberi" ],
    "list_json": [ { "x":"1", "y":"2" }, { "m": "true", "n": "false" }, { "name": "Bob",  "Numbers": [11, 22] } ],
}

console.dir(JSON.stringify( parseJson(input) ));