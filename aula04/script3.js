let nome = prompt("Qual é o seu nome?")
let idade = prompt("Qual é a sua idade?")
if (idade >= 0 && idade < 18){
    console.log(nome + " é menor de idade.")
} else if (idade >= 18 && idade <= 130){
    console.log(nome + " é maior de idade")
} else{
    console.log("Sua idade é inválida.")
}
 