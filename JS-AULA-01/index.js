const prompt = require("prompt-sync")();
const name = prompt("Qual é o seu nome? ");
console.log(`Olá ${name}!`);

let idade = prompt("Qual é sua idade? ");
idade = parseInt(idade, 10);
console.log(`Você tem ${idade}!`);