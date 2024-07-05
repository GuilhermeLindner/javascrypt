function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var idade = window.document.getElementById('txtano')
    var res = document.getElementById('res')
    if(idade.value.length == 0 || idade.value > ano) {
        window.alert('Verifique e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var anos = ano - Number(idade.value)
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (anos >= 0 && anos <= 18) {
            //criança
            img.setAttribute('src', 'homem.png')
        } else if (anos < 60) {
            //adolescente
            img.setAttribute('src', 'adultoo.png')
        } else {
            //idoso
            img.setAttribute('src', 'idosoo.png')
        }
        res.innerHTML = `idade: ${anos}`
}