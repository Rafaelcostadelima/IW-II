let nota = parseFloat(prompt("Digite uma nota de 0 a 10:"));

while (nota < 0 || nota > 10 || isNaN(nota)) {
    nota = parseFloat(prompt("Nota inválida! Por favor, digite uma nota entre 0 e 10:"));
}

alert("Nota válida registrada: " + nota);