function Parimpi (n) {
    if (n%2 == 0) {
        return 'par'
    } else {
        return 'ímpar'
    }
}
let res = Parimpi()

console.log(`o número escolhido é de fato ${res}`)