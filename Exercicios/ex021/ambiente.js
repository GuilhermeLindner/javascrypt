// OBJETO:
let amigo = {
nome: 'josé',
idade: ' 45',
peso: '86'
engordar(p=0){
    console.log('engordou')
    this.peso += p
}}
amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso}`)

