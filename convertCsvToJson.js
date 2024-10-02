const fs = require('fs')
csvfile = fs.readFileSync('./csvFile.csv')
const csvArray = csvfile.toString().split("\n")
const header = csvArray[0].split(",")
const jsonObject = [];

for(let i = 1; i<csvArray.length; i++){
    let data = csvArray[i].split(",")
    let object = {}
    for(let j=0; j<data.length; j++){
        object[header[j].trim()] = data[j].trim();
    }
    jsonObject.push(object)
}
console.log(jsonObject);