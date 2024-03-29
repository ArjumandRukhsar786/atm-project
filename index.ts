#! /usr/bin/env node
import inquirer from "inquirer";
import Choices from "inquirer/lib/objects/choices.js";

let myBalance = 100000; //Dollar
let myPin = 1234;

const pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "enter your pin number",
        type: "number",
    },
]);

if (pinAnswer.pin === myPin){
    console.log("Correct pin code!!!");
    let operationAns = await inquirer.prompt([
            {
                name: "operation",
                message: "please select option",
                type: "list",
                choices: ["withdraw","check balance", "fast cash"],
            },
          ]);

if (operationAns.operation === "withdraw"){
    const amountAnswer = await inquirer.prompt({
        name: "amount",
        type: "number",
        message: "Enter your amount",
    });
    if (amountAnswer.amount > myBalance){
     console.log("You don't have enough money in your account to cover your transaction.");
    }
    else{
        myBalance -= amountAnswer.amount;
        console.log(`Transaction successfull your remaining balance is ${myBalance}`);
    };
}
else if (operationAns.operation === "fast cash"){
    const enterAmount = await inquirer.prompt({
     name: "amount",
     type:"list",
     message: "select your amount",
     choices: ["1000", "5000","10000","20000", "50000"], 
    });

    if (enterAmount.amount <= myBalance){
        let balance2 = myBalance - enterAmount.amount;
        console.log(`The remaining balance is ${balance2}`);
    }
   
}else if (operationAns.operation === "check balance"){
    console.log("your balance is :" + myBalance)
};
}
else {
    console.log ("enter correct your pin number");
}
    
    











