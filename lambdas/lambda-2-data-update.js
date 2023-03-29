import { builtinModules } from 'module';
//import outputData from './lambda-1-data-transform';
import { promises as fs } from 'fs';
import jsonfile from 'jsonfile';
import dataTransformer from './lambda-1-data-transform.js';


async function updateHtml() {
  try {

    let transform = await dataTransformer();

    // Read the contents of the JSON file
    //let read = await jsonfile.readFileSync('./S3/transformedData.json', 'utf8');
    //console.log(read);
    // make sure tyhe JSON is in a format readable in a JS file
    //const jsonData = read;

    // Convert the JavaScript object to a string with the variable assignment
    //const jsData = `const data = ${JSON.stringify(jsonData)};`;

    // Write the updated contents to the pie-data.js file 

    //let write = await jsonfile.writeFileSync('pie-data.js', jsData);



    const read = jsonfile.readFileSync('./S3/transformedData.json');
    const rawData = read.someData;
    console.log("rawData", rawData);

    const mapRawData = (rawData) => {
      const totalCount = rawData.length;
      const secondColumnCounts = {};

      // Count the number of times the second field value appears in the objects
      for (let i = 0; i < rawData.length; i++) {
        const value = rawData[i][Object.keys(rawData[i])[1]];
        secondColumnCounts[value] = secondColumnCounts[value] ? secondColumnCounts[value] + 1 : 1;
      }

      // Create a new array of objects with the first and second columns
      const newArray = [];
      for (let i = 0; i < rawData.length; i++) {
        const firstColumnValue = rawData[i][Object.keys(rawData[i])[0]];
        const secondColumnValue = (secondColumnCounts[rawData[i][Object.keys(rawData[i])[1]]] / totalCount) * 100;
        newArray.push({
          "name": firstColumnValue,
          "share": secondColumnValue
        });
      }

      return newArray;
    }


    //create a function called rawData parser that takes json input and maps through each key producing a single percentage value as its value

    const mappedData = await mapRawData(rawData);

    console.log("mappedData", mappedData);

    const stringifiedData = `const data = ${mappedData};`;

    console.log('stringified', stringifiedData);

    jsonfile.writeFileSync('pie-data.js', mappedData);




  } catch (error) {
    console.error('An error occurred:', error);

  }
  // Update the contents of the HTML file

  //regex for everything between body tags

  // const regex = /<script\b[^<]*(?:(?!<\/script >)<[^<]*)*>([\s\S]*?)<\/script>/g;

  // let updateHTML = await textData.replace(regex, `<script id="data">${parsedData}</script>`);
}




// Define the functions to be called
// async function transform() {
//   return new Promise((resolve, reject) => {
//     // Perform some asynchronous operation here
//     setTimeout(() => {
//       console.log('Transform function completed');
//       resolve('Result from first function');
//     }, 1000);
//   });
// }

// async function read() {
//   return new Promise((resolve, reject) => {
//     // Perform some asynchronous operation here
//     setTimeout(() => {
//       console.log('Second function completed');
//       resolve('Result from second function');
//     }, 1000);
//   });
// }

// async function write() {
//   return new Promise((resolve, reject) => {
//     // Perform some asynchronous operation here
//     setTimeout(() => {
//       console.log('Third function completed');
//       resolve('Result from third function');
//     }, 1000);
//   });
// }

// // Call the main function
updateHtml();
