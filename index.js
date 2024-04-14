import inquirer from "inquirer";
let currency = {
    USD: 1, //base currency
    CNY: 7.24,
    GBP: 0.8,
    EUR: 0.94,
    SGD: 1.36,
    CAD: 1.38,
    AUD: 1.54,
    NZD: 1.68,
    AED: 3.67,
    SAR: 3.75,
    AFN: 71.18,
    INR: 83.61,
    BDT: 109.49,
    YER: 250.33,
    PKR: 277.3,
    LKR: 297.8,
    IRR: 42075.0,
};
let currency_converter = await inquirer.prompt([
    {
        name: "from",
        message: "Convert from currency: ",
        type: "list",
        choices: [
            "USD",
            "CNY",
            "GBP",
            "EUR",
            "SGD",
            "CAD",
            "AUD",
            "NZD",
            "AED",
            "SAR",
            "AFN",
            "INR",
            "BDT",
            "YER",
            "PKR",
            "LKR",
            "IRR",
        ],
    },
    {
        name: "to",
        message: "Convert to currency: ",
        type: "list",
        choices: [
            "USD",
            "CNY",
            "GBP",
            "EUR",
            "SGD",
            "CAD",
            "AUD",
            "NZD",
            "AED",
            "SAR",
            "AFN",
            "INR",
            "BDT",
            "YER",
            "PKR",
            "LKR",
            "IRR",
        ],
    },
    {
        name: "amount",
        type: "number",
        message: "Enter your amount: ",
    },
]);
let fromAmount = currency[currency_converter.from]; //exchange rate
let toAmount = currency[currency_converter.to]; //exchange rate
let amount = currency_converter.amount;
let baseAmount = amount / fromAmount; //USD base currency conversion
let convertedAmount = baseAmount * toAmount;
console.log(`Your amount conversion is: ${convertedAmount.toFixed(2)}`);
