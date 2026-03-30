let valor = parseInt(prompt("Digite o valor que deseja sacar:"));
let notas = [100, 50, 20, 10, 5, 2, 1];
let resultado = "Cédulas para o saque:\n";

for (let i = 0; i < notas.length; i++) {
    let cedula = notas[i];
    let quantidade = Math.floor(valor / cedula);

    if (quantidade > 0) {
        resultado += quantidade + " nota(s) de R$ " + cedula + "\n";
        valor = valor % cedula;
    }
}

alert(resultado);