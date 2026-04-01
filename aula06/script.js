function maior(a, b) {
    if (a > b) {
        alert(`${a} é maior que ${b}`)
    } else if (b > a) {
        alert(`${b} é maior que ${a}`)
    } else {
        alert(`${a} e ${b} são iguais`)
    }
}

let a = Number(prompt("Digite um número:"))
let b = Number(prompt("Digite outro número:"))

maior(a, b)