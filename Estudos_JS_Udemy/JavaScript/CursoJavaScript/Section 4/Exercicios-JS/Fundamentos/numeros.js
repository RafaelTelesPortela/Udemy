const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1)) //isInteger= Informa verdadeiro se inteiro e falso se quebrado.
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2)) //toFixed= Define a quantidade de casas decimais. 
console.log(media.toString(2)) //toString = Transforma o número em binário.
console.log(typeof media)// typeof = Identifica o tipo da variável.
console.log(typeof Number)// Number = função
                           // number = tipo de dado
