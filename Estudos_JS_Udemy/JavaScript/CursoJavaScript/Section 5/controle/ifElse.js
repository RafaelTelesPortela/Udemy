const imprimirResultado = function(nota) {
    if(nota >= 7) {
        console.log('Aprovado!')
    } else {
        console.log('Repreovado!')
    }
}


imprimirResultado(10)
imprimirResultado(4)
imprimirResultado('Epa!') //Cuidado!!