import fs, { writeFile, writeFileSync } from 'fs';
import csv from 'csv-parser';
import { builtinModules } from 'module';

// Define the file path and column names
const filePath = 'pie-shop/banklist-sheet-sorted.csv';
const columns = ['Bank Name', 'State', 'Date'];

// Create an empty object to store the output
// Read the CSV file and convert it to JSON
function readFile(){
  return new Promise((resolve, reject) => {
  const output = {};
  fs.createReadStream(filePath)
  .pipe(csv())
  .on('data', (row) => {
    // For each row, add the values to the output object using the column names as keys
    columns.forEach((column) => {
      if (!output[column]) {
        output[column] = [];
      }
      output[column].push(row[column]);
    });
  })
  .on('end', () => {
    writeFileSync('pie-shop/banklist-sheet.json',JSON.stringify(output));
    console.log("success");
  });
 
 });

}

readFile();

// export default {
//   readFile,
// };
