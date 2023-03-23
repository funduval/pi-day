import fs, { writeFile, writeFileSync } from 'fs';
import csv from 'csv-parser';
import { builtinModules } from 'module';

const filePath = 'S3/banklist-sheet-sorted.csv';
function readFile(){
  return new Promise((resolve, reject) => {
  const outputData=[];
 
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

readFile();

// export default {
//   readFile,
// };
