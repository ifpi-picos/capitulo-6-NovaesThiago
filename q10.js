function entradaDeDados(num1, num2){
    num1 = Number(prompt("Digite a primeira nota: "))
    num2 = Number(prompt("Digite a segunda nota: "))
    return[num1, num2]
}

function mediaNumeros (index){
    let media = (index[0]+index[1])/2
    let mediaFormatada = media.toFixed(2)
    return mediaFormatada
}

function saidaDeDados(){
    let numeros = entradaDeDados()
    let result = mediaNumeros(numeros)
    console.log(result)
}

saidaDeDados()