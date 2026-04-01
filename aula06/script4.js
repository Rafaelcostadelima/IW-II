function calcularMedia(a, b, c, d) {
    let media = (a + b + c + d) / 4
    return media
}

let numero1 = Number(prompt("Digite um número:"))
let numero2 = Number(prompt("Digite outro número:"))
let numero3 = Number(prompt("Digite um outro número:"))
let numero4 = Number(prompt("Agora, digite o último número:"))
let MediaFinal = calcularMedia(numero1, numero2, numero3, numero4)
alert(`A média final foi de: ${MediaFinal}`)