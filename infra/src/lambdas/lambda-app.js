import { builtinModules } from 'module';
//import outputData from './lambda-1-data-transform';
import { promises as fs } from 'fs';
import jsonfile from 'jsonfile';
import dataTransformer from './lambda-1-data-transform.js';
//NOTE: make below async when uncommented for pi project. "async" in front of updateHtml() function name and "await" in front of dataTransformer function call. Uncomment try catch block.

function updateHtml() {
  // try {

  let transform = dataTransformer();

  // const read = jsonfile.readFileSync('infra/src/S3/transformedData.json');
  // const rawData = read.someData;

  // const mapRawData = (rawData) => {
  //   const totalCount = rawData.length;
  //   const secondColumnCounts = {};

  // Count the number of times the second field value appears in the objects
  // for (let i = 0; i < rawData.length; i++) {
  //   const value = rawData[i][Object.keys(rawData[i])[1]];
  //   secondColumnCounts[value] = secondColumnCounts[value] ? secondColumnCounts[value] + 1 : 1;
  // }

  // const resultOfHi = [1, 2, 6, 8, 3, 6, 9];
  //loop through resultOfHi and output a single value that is the sum of all values

  // let sumOfHi = resultOfHi.reduce((accumulator, currentValue) => {
  //   return accumulator + currentValue;

  // })
  //show result of hi

  //console.log("sum of HI", sumOfHi);

  console.log("transformed data from csv to json");


  // const newArray = [];
  // for (let i = 0; i < rawData.length; i++) {
  //   const firstColumnValue = rawData[i][Object.keys(rawData[i])[0]];
  //   const secondColumnValue = (secondColumnCounts[rawData[i][Object.keys(rawData[i])[1]]] / totalCount) * 100;
  //   newArray.push({
  //     "name": firstColumnValue,
  //     "share": secondColumnValue
  //   });
  // }

  //   return newArray;
  // }

  // const mappedData = mapRawData(rawData);
  // jsonfile.writeFileSync('infra/src/S3/pie-data.json', { "someData": mappedData });


  // } catch (error) {
  //   console.error('An error occurred:', error);

  // }

}


updateHtml();
