let numero = parseInt(prompt("Digite um número:"));
let ehPrimo = true;

if (numero <= 1) {
    ehPrimo = false;
} else {
    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            ehPrimo = false;
            break;
        }
    }
}

if (ehPrimo) {
    alert(numero + " é um número primo.");
} else {
    alert(numero + " não é um número primo.");
}