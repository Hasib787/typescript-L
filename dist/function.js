"use strict";
function addNumber(num1, num2) {
    return num1 + num2;
}
const add = (num1, num2) => num1 + num2;
const arr = [45, 32, 54, 6];
const newArray = arr.map((elem) => elem * elem);
console.log(newArray);
const person = {
    name: "Hasib",
    balance: 500,
    addBalance(money) {
        console.log(`My new balance is ${this.balance + money}`);
    },
};
