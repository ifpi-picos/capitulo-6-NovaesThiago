function calculadora(){
let num1 = Number(prompt("Digite o primeiro número: "))
let operacao = prompt("DIgite a operação")
let num2 = Number(prompt("Digite o segundo número: "))
let result = Number

switch(operacao){
    case "+":
        result = soma(num1,num2)
        break;
    case "-":
        result = subtracao(num1, num2)
        break;
    case "*":
        result = multiplicacao(num1, num2)
        break;
    case "/":
        result = divisao(num1, num2)
        break;
}
console.log(result)

}

function soma(primeiroValor, segundoValor){
    return primeiroValor+segundoValor
}

function subtracao(primeiroValor, segundoValor){
    return primeiroValor-segundoValor
}

function multiplicacao(primeiroValor, segundoValor){
    return primeiroValor*segundoValor
}

function divisao(primeiroValor, segundoValor){
    return primeiroValor/segundoValor
}

calculadora()