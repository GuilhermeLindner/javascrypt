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
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if(anos >= 0 && anos < 18) {
                //criança
                img.setAttribute('src', 'homem.png')
            } else if (anos < 60) {
                //adulto
                img.setAttribute('src', 'adultoo.png')
            } else {
                //idoso
                img.setAttribute('src', 'idosoo.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if(anos >= 0 && anos < 18) {
                //criança
                img.setAttribute('src', 'menina.png')
            } else if (anos < 60) {
                //adulto
                img.setAttribute('src', 'mulher.png')
            } else {
                //idoso
                img.setAttribute('src', 'idosaa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${anos} anos`
        res.appendChild(img)
    }
}