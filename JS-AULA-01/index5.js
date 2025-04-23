const notas = [3,3,7];
console.log(`Nota 1: ${notas[0]}`);
console.log(`Nota 2: ${notas[1]}`);
console.log(`Nota 3: ${notas[2]}`);


const media = notas.map((nota) => {
    return nota < 6 ? "Sem média" : "Com média"
});

console.log(`Média 1: ${media[0]}`);
console.log(`Média 2: ${media[1]}`);
console.log(`Média 3: ${media[2]}`);

// [3, 9, 7]
const mediaFinal = notas.reduce((previous, current, index, values) => {
    const newValue = previous + current;
    if (index < values.length - 1) {
        return previous + current
    }
    return newValue / values.length;
});

console.log(`Sua média final é: ${mediaFinal}`);

if (mediaFinal >= 6) {
    console.log("Parabéns, você passou!")
} else {
    console.log("Infelizmente, você foi reprovado.")
}