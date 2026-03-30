let soma = 0;
let numero = 0;

while (true) {
    numero = parseFloat(prompt("Digite um número (digite um número negativo para encerrar e ver o total):"));

    if (numero < 0) {
        break;
    }

    soma += numero;
}

alert("A soma total dos números positivos é: " + soma);