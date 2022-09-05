const notas = [6.7, 7.4, 9.4, 8.1, 7.7]

for(let i in notas) {
    console.log(i, notas[i])
}

const pessoa = {
    nome: 'Rafael',
    sobrenome: 'Teles',
    idade: 26,
    peso: 72
}

for(let atributos in pessoa) {
    console.log(`${atributos} = ${pessoa[atributos]}`)
}

