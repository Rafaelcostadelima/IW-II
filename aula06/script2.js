function ParOuImpar(numero){
    if (numero % 2 == 0) {
        return true
    } else {
        return false
    } 
}

let a = prompt("Digite um número:")
let resultado = ParOuImpar(a)
alert(`Este número é par? ${resultado}`)