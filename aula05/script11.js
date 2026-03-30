let numero = parseInt(prompt("Digite um número para calcular o fatorial:"));

if (numero < 0) {
    alert("Não existe fatorial para números negativos.");
} else {
    let fatorial = 1;
    
    for (let i = 2; i <= numero; i++) {
        fatorial *= i;
    }
    
    alert("O fatorial de " + numero + " é " + fatorial);
}