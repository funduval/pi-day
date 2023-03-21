import { csvParseRows } from "d3";
import readFile from './file-service/file-parser.js';
console.log("readFile", readFile);
const data = readFile.readFile()
  .then((myObject) => {
    console.log(myObject);
  })
  .catch((err) => {
    console.error(err);
  });


console.log("results of function execution", data);
