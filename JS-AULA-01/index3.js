const prompt = require("prompt-sync")();


const raio = prompt("Qual é o raio do círculo? ");

console.log(`O raio é ${raio} cm!`);

const perimetro = 2 * Math.PI * raio;
const area = Math.PI * Math.pow(raio, 2)

console.log(`Perimetro: ${perimetro} cm`);
console.log(`Área: ${area} cm`);