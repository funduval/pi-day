import { csvParseRows } from "d3";
import readFile from './lambdas/lambda-1-data-transform.js';

var data = [{name: "Alex", share: 20.70},
{name: "Shelly", share: 60.92},
{name: "Clark", share: 5.42},
{name: "Matt", share: 3.65},
{name: "Jolene", share: 9.31}];

const dataRead = readFile.readFile()
  .then((myObject) => {
    console.log(myObject);
  })
  .catch((err) => {
    console.error(err);
  });


console.log("results of function execution", data);
