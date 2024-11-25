let valor = [1, 4, 6, 7, 8, 9,8 ,6, 4, 3, 2]
/*
for(let pos = 0 ;pos<valor.length ; pos++ ) {
    console.log(`a posição ${pos}, tem  o valor: ${valor[pos]}`)
}
for(let pos in valor) {
    console.log(`a posição ${pos} tem valor igual a: ${valor[pos]}`)
}
    */

let pos = valor.indexOf(10)
if (pos == -1) {
    console.log(`este valor não existe`)
} else {
    console.log(`na posição ${pos}`)
}

