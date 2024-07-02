var idade = 70

if (idade < 18) {
    console.log(`não vota`)
}
else {
    if (idade < 18 || idade > 65) {
        console.log(`voto opcional`)
    }
    else {
        console.log(`votante obrigatório`)
    }
}