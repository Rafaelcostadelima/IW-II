const usuarioCorreto = "admin";
const senhaCorreta = "1234";

let usuario = prompt("Digite o nome de usuário:");
let senha = prompt("Digite a senha:");

while (usuario !== usuarioCorreto || senha !== senhaCorreta) {
    alert("Login ou senha incorretos! Tente novamente.");
    
    usuario = prompt("Digite o nome de usuário:");
    senha = prompt("Digite a senha:");
}

alert("Login realizado com sucesso!");