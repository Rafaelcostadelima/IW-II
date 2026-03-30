let idade = prompt("Digite a sua idade:")
if (idade >= 18 && idade <= 130){
    alert("Você é maior de idade")
} else if (idade > 130 || idade < 0){
    alert("Sua idade é inválida")
} else {
    alert("Você é de menor")
}