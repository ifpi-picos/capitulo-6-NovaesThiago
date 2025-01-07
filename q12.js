function entradaDeDados(){
    let num1 = Number(prompt("Digite o primeiro número: "))
    let operacao = prompt("Digite a operação")
    let num2 = Number(prompt("Digite o segundo número: "))
    return [num1, num2, operacao]
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

function calculadora(index) { 
    let result
    let valor1 = index[0]
    let valor2 = index[1] 
    let operacao = index[2]

    switch(operacao){
        case "+":
            result = soma(valor1, valor2)
            break;
        case "-":
            result = subtracao(valor1, valor2)
            break;
        case "*":
            result = multiplicacao(valor1, valor2)
            break;
        case "/":
            result = divisao(valor1, valor2)
            break;
    }
    return result
}

function saidaDeDados(){
    let numeros = entradaDeDados()
    let result = calculadora(numeros)
    console.log(result)
}


saidaDeDados()

//rapaz penei um cadinho pra fazer isso aqui, ferias mataram meu raciocinio logico