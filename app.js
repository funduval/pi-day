import { csvParseRows } from "d3";
import readFile from './lambdas/lambda-1-data-transform.js';

const data = readFile.readFile()
  .then((myObject) => {
    console.log(myObject);
  })
  .catch((err) => {
    console.error(err);
  });


console.log("results of function execution", data);
