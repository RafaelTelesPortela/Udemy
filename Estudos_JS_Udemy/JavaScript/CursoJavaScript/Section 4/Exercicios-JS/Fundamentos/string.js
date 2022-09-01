const escola = "Cod3r";

console.log(escola.charAt(4))// Pegar o caractere n aposição selecionada.
console.log(escola.charAt(5))
console.log(escola.charCodeAt(3))//Pegar o código do caractere.
console.log(escola.indexOf('3'))//Pegar o indice.

console.log(escola.substring(1))// Indici inicial.
console.log(escola.substring(0, 3))// Indici inicial e final.

console.log('Escola '.concat(escola).concat("!"));// Concatenar na String;
console.log('Escola ' + escola + "!")
console.log(escola.replace(3, 'e'))// substitui código por caractere.

console.log('Ana,Maria,Pedro'.split(','))// Ordena em Lista.