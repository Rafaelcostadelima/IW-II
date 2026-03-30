let numeroLimite = parseInt(prompt("Digite um número:"));
let impares = "";

for (let i = 1; i <= numeroLimite; i++) {
    if (i % 2 !== 0) {
        impares += i + " ";
    }
}

alert("Números ímpares de 1 até " + numeroLimite + ":\n" + impares);