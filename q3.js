function entradaDeDados(){
    let num1 = parseFloat(prompt("Digite a primeira nota: "))
    let num2 = parseFloat(prompt("Digite a segunda nota: "))
    let num3 = parseFloat(prompt("Digite a terceira nota: "))
    return [num1, num2, num3]
}

function mediaNotas (index){
    let numeros = (index[0]+index[1]+index[2])
    let media = (numeros/3)
    let mediaFormatada = media.toFixed(2)
    return mediaFormatada
}

function saidaDeDados(){
    let numeros = entradaDeDados()
    let result = mediaNotas(numeros)
    console.log(result)
}

saidaDeDados()