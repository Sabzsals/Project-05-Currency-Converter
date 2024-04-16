import inquirer from "inquirer";
//Define the list ofcurrencies and their exchange rate
let exchange_rate = {
    "USD": 1,
    "EUR": 0.9,
    "JYP": 113,
    "CAD": 1.3,
    "AUD": 1.65,
    "PKR": 280, // Pakistani rupees
    //Add more currencies and their exchange rate here
};
//Print the user to select currencies to convert from and to
let user_answer = await inquirer.prompt([
    { name: "from_currency",
        type: "list",
        message: "Select the currency to convert from:",
        choices: ["USD", "EUR", "JYP", "CAD", "AUD", "PKR"]
    },
    {
        name: "to_currency",
        type: "list",
        message: "Select the currency to convert into",
        choices: ["USD", "EUR", "JYP", "CAD", "AUD", "PKR"]
    },
    {
        name: "amount",
        type: "input",
        message: "Enter the amount to convert:",
    }
]);
// Perform currency conversion by using formula
let from_amount = exchange_rate[user_answer.from_currency];
let to_amount = exchange_rate[user_answer.to_currency];
let amount = user_answer.amount;
//printing the formula of converting currency
let base_amount = amount / from_amount;
let converted_amount = base_amount * to_amount;
//Display the converted amount
console.log(`Converted Amount = ${converted_amount}`);
