let numeros = document.getElementById('valores')
let selecionar = document.getElementById('selecionar')
let num = document.getElementById('num')
let res = document.getElementById('res')
let valores = []

function inumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}

function ilista (n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function verificar () {
    if (inumero(numeros.value) && !ilista(numeros.value, valores)) {
        valores.push(Number(numeros.value))
        let item = document.createElement('option')
        item.text = `valor ${numeros.value} adicionado`
        num.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert('valor não encontrado ou não está na lista')
    }
    numeros.value = ''
    numeros.focus()
}

function finalizar(l) {
    if (Number(valores) == '') {
        window.alert('impossível enviar')
    } else {
        let total = valores.length
        let maior = valores [0]
        let menor = valores [0]
        let soma = 0
        let media = 0
        for (pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior) 
                maior =  valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos]
        }
        media = soma/total
        res.innerHTML= ''
        res.innerHTML +=  `<p>Ao todo são  ${total} valores </p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}`
        res.innerHTML += `<p>O menor valor informado foi ${menor}`
        res.innerHTML += `<p>A soma de todos é ${soma}`
        res.innerHTML +=`<p>A media de todos é ${media}`
    }
}