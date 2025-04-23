const turma = {
    alunos: [
        { nome: "Karina", notas: [10,8,10] },
        { nome: "Giselle", notas: [7,2,4] },
        { nome: "Valentina", notas: [7,7,6] },
        { nome: "Ana Clara", notas: [6,3,5] }
    ]
};

const mediaTurma = turma.alunos.map((aluno) => {
    const media = aluno.notas.reduce((previous, current, index, values) => {
        const newValue = previous + current;
        if (index === values.length - 1) {
            return newValue / values.length;
        }
        return newValue;
    });

    return {
        nome: aluno.nome,
        media: media,
        status: media >= 6 ? "Aprovado!" : "Reprovado :("
    }

});

console.log(mediaTurma);