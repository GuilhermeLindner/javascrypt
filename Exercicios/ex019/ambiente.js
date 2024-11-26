let valor = [1, 4, 6, 7, 8]
/*
for(let pos = 0 ;pos<valor.length ; pos++ ) {
    console.log(`a posição ${pos}, tem  o valor: ${valor[pos]}`)
}
for(let pos in valor) {
    console.log(`a posição ${pos} tem valor igual a: ${valor[pos]}`)
}
    */
/*
console.log(`esta variável possui ${valor.length} de comprimento`)
*/
let pos = valor.indexOf(1)
if (pos == -1) {
    console.log(`valor não encontrado`)
} else {
    console.log(`o valor está na posição ${valor[pos]}`)
}