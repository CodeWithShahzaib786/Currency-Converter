#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
// welcome message
console.log(chalk.blue.bold("\n \t WELCOME \t \n"));
// create the object of exchange rate
let exchange_rate = {
    "USD": 1,
    "EUR": 0.94,
    "DIRHAM": 3.67,
    "AUD": 1.54,
    "POUND": 0.80,
    "RUBBLE": 93.33,
    "PKR": 277.30, // Pakistani rupee,
};
let user_answer = await inquirer.prompt([
    {
        name: "from_currency",
        type: "list",
        message: chalk.yellow("Select the currency you want to convert:"),
        choices: ["USD", "EUR", "DIRHAM", "AUD", "POUND", "RUBBLE", "PKR"],
    },
    {
        name: "to_currency",
        type: "list",
        message: chalk.yellow("Select the currency you want to convert into:"),
        choices: ["USD", "EUR", "DIRHAM", "AUD", "POUND", "RUBBLE", "PKR"],
    },
    {
        name: "amount",
        type: "input",
        message: chalk.red("Enter the amount to convert:"),
    }
]);
//Perform currency conversion by using formula
let from_amount = exchange_rate[user_answer.from_currency];
let to_amount = exchange_rate[user_answer.to_currency];
let amount = user_answer.amount;
//formula of conversion:
let base_amount = amount / from_amount;
let converted_amount = base_amount * to_amount;
// Display the converted currency
console.log(chalk.green(`\nconverted amount : ${converted_amount.toFixed(2)} \n`));
