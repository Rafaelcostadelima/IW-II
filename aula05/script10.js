let numeroAleatorio = 3;
let palpite = 0;

while (palpite !== numeroAleatorio) {
    palpite = parseInt(prompt("Adivinhe o número de 1 a 10:"));

    if (palpite < numeroAleatorio) {
        alert("Muito baixo! Tente um número maior.");
    } else if (palpite > numeroAleatorio) {
        alert("Muito alto! Tente um número menor.");
    }
}

alert("Parabéns! Você acertou, o número era " + numeroAleatorio);