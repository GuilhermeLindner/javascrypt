function carregar() {
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('img')
var data = new Date()
var hora = data.getHours()
msg.innerHTML = `Agora são ${hora} horas`
if (hora >= 0 && hora < 12) {
    //bom dia
    img.src = `manha.png`
    document.section.style.background = '#6cdce2'
} else if (hora < 18) {
    //boa tarde
    img.src = `tarde.png`
    document.section.style.background = '6c7509'
} else {
    //boa noite
    img.src = `noite.png`
    document.body.style.background = '#0d585c'
}
}