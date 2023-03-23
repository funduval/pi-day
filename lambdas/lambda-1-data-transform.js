import fs, { writeFile, writeFileSync } from 'fs';
import csv from 'csv-parser';



function dataTransformer () {
  
const filePath = 'S3/banklist-sheet-sorted.csv';
const outputData = [];
function readFile(){
  return new Promise((resolve, reject) => {
  // const outputData=[];
 
  fs.createReadStream(filePath)
  .pipe(csv())
  .on('data', (row) => {
    let output = {};
     outputData.push(row);
    
  })
  .on('end', () => {
    resolve(outputData);
    writeFileSync('S3/banklist-sheet.json',JSON.stringify(outputData));
    console.log("success");

    
  });
})
}

}



export default dataTransformer
