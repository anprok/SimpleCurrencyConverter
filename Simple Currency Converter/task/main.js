const input = require('sync-input');


const currencies = ["USD",'JPY', "EUR", "RUB",  "GBP"];
const convert = [1, 113.5, 0.89, 74.36, 0.75]
console.log("Welcome to Currency Converter!")
console.log("1 USD equals 1 USD")
console.log("1 USD equals 113.5 JPY")
console.log("1 USD equals 0.89 EUR")
console.log("1 USD equals 74.36 RUB")
console.log("1 USD equals 0.75 GBP")


let result;
while (true) {
    console.log("What do you want to do?")
    console.log("1-Convert currencies 2-Exit program")
    let command = input()
    if (command === "2") {
        console.log("Have a nice day!")
        break
    }

    else if (command === "1") {
        console.log("What do you want to convert?")
        console.log("From:")
        let from = input().toUpperCase();
        if (!currencies.includes(from)) {
            console.log("Unknown currency")
            continue;
        }
        console.log("To:")
        let to = input().toUpperCase();
        if (!currencies.includes(to)) {
            console.log("Unknown currency")
            continue;
        }
        console.log("Amount:")
        let amount = Number(input());
        if (!isFinite(amount)) {
            console.log("The amount has to be a number")
            continue;
        }
        if (amount < 1) {
            console.log("The amount cannot be less than 1")
            continue;
        }
        result = (1 / convert[currencies.indexOf(from)]) * amount * convert[currencies.indexOf(to)]
        console.log(`Result: ${amount} ${from} equals ${result.toFixed(4)} ${to}`)
    }
    else {
        console.log("Unknown input")
    }

}
