import express from "express";
const app = express();
function greet(name: string): void {
  console.log(`Hello, ${name}!`);
}

function printCurrentDateTime(): void {
  const now = new Date();
  console.log(`Current date and time: ${now.toLocaleString()}`);
}

function calculateSum(a: number, b: number): void {
  const sum = a + b;
  console.log(`The sum of ${a} and ${b} is ${sum}`);
}

function printCustomMessage(message: string): void {
  console.log(message);
}

greet("John");
printCurrentDateTime();
calculateSum(5, 3);
printCustomMessage("This is a custom message!");
