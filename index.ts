#! /usr/bin/env node

import inquirer from "inquirer";

const result = await inquirer.prompt([
  { message: "Enter First Number", type: "number", name: "FirstNum" },
  { message: "Enter Second Number", type: "number", name: "SecondNum" },
  {
    message: "Select one of the operator to perform calculation",
    type: "list",
    name: "Operators",
    choices: ["Addition", "Subtraction", "Muliplication", "Division"],
  },
]);
if (result.Operators === "Addition") {
  console.log(result.FirstNum + result.SecondNum )
} else if(result.Operators === "Muliplication" ) {
    console.log(result.FirstNum * result.SecondNum )}
    else if(result.Operators === "Subtraction" ) {
        console.log( result.FirstNum - result.SecondNum )}
        else if(result.Operators === "Division") {
            console.log( result.FirstNum / result.SecondNum )}
            else{console.log("Please select correct operator");
            } ;

