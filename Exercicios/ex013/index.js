var agora = new Date()
var diasem = agora.getDay()

/*
domingo = 0
segunda = 1 
terça = 2
quarat = 3
quinta = 4
sexta = 5 
sabado = 6
*/

switch(diasem) {
    case 0: 
        console.log(`domingo`)
        break
    case 1: 
        console.log(`segunda`)
        break
    case 2:
        console.log(`terça`)
        break
    case 3:
        console.log(`quarta`)
        break
    case 4: 
        console.log(`quarta`)
        break
    case 5:
        console.log(`sexta`)
        break
    case 6: 
        console.log(`sabado`)
        break
    default:
        console.log(`ERRO`)
        break //opcional//
}       
