function conversorRealParaDolar (dolar){
    dolar = (entradaDeDados()/6.11)
    return dolar
}

function entradaDeDados(real){
    real = Number(prompt("Digite o valor em Real: "))
    return real
}

function saidaDeDados(resultado){
    resultado = conversorRealParaDolar()
    console.log("O valor convertido em Dolar é: $", resultado)
}

saidaDeDados()

