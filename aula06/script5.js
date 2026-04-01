function conversao(celsius){
    let resultado = (celsius * 1.8) + 32
    return resultado
}

let celsius = Number(prompt("Digite a temperatura em °C:"))
let fahrenheit = conversao(celsius)
alert(`A conversão de ${celsius}°C para Fahrenheit é: ${fahrenheit}°F`)