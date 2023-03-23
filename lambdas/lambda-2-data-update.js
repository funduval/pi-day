import { builtinModules } from 'module';
//import outputData from './lambda-1-data-transform';
import { promises as fs} from 'fs'; 
import jsonfile from 'jsonfile';
import dataTransformer from './lambda-1-data-transform.js';


async function updateHtml() {
  try {

    let transform = await dataTransformer();

// Read the contents of the JSON file
    let read = await jsonfile.readFileSync('./S3/transformedData.json', 'utf8');
      
// Write the updated contents to the app.js file 

    let write = await jsonfile.writeFileSync('app.js', 'let data = ' + read)
      
    console.log('The JSON file has been updated in app.js!');
    console.log('All functions completed successfully:', transform, read, write);

  } catch (error) {
    console.error('An error occurred:', error);

  }
// Update the contents of the HTML file

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
