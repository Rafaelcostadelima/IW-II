function fatorial(numero) {
    let resultado = 1
    while (numero > 1) {
        resultado *= numero
        numero--
    }
    return resultado
}

let numero = Number(prompt("Digite um número:"))
let resultadoFinal = fatorial(numero)
alert(`${numero}! é igual a ${resultadoFinal}`)