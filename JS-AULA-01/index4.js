const notas = [6,9,7,4,2,10];
console.log(`Nota Henrique: ${notas[0]}`);
console.log(`Nota Pedro: ${notas[1]}`);
console.log(`Nota Rafael: ${notas[2]}`);
console.log(`Nota Gabriel: ${notas[3]}`);
console.log(`Nota Murilo: ${notas[4]}`);
console.log(`Nota Kauã: ${notas[5]}`);

const media = notas.map((nota) => {
    return nota < 6 ? "Sem média" : "Com média"
});

console.log(`Média Henrique: ${media[0]}`);
console.log(`Média Pedro: ${media[1]}`);
console.log(`Média Rafael: ${media[2]}`);
console.log(`Média Gabriel: ${media[3]}`);
console.log(`Média Murilo: ${media[4]}`);
console.log(`Média Kauã: ${media[5]}`);