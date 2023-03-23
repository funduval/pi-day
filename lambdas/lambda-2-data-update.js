import { builtinModules } from 'module';
//import outputData from './lambda-1-data-transform';
import { promises as fs} from 'fs'; 
import dataTransformer from './lambda-1-data-transform.js';




async function updateHtml() {
  try {

    await dataTransformer();

    const regex = /<script\b[^<]*(?:(?!<\/script >)<[^<]*)*>([\s\S]*?)<\/script>/g;
  

    let outputData = await fs.readFile('./S3/transformedData.json', 'utf8', (error, data) => {
      if(error){
         console.log(error);
         return;
      }
      return data;
 
    })

    // Read the contents of the HTML file
    let textData = await fs.readFile('index.html', 'utf8');
      let stringifiedData = JSON.stringify("const data = " + outputData)
      let parsedData = JSON.parse(stringifiedData);
   

    // Update the contents of the HTML file
      let updatedData = textData.replace(regex, `<script id="data">${parsedData}</script>`);


    // Write the updated contents back to the same file
    await fs.writeFile('index.html', updatedData, 'utf8');

    console.log('The file has been updated!');
  } catch (err) {
    console.error(err);
  }
}

updateHtml();