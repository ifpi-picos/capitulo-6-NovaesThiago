function mediaNotas (){
    let num1 = parseFloat(prompt("Digite a primeira nota: "))
    let num2 = parseFloat(prompt("Digite a segunda nota: "))
    let num3 = parseFloat(prompt("Digite a terceira nota: "))
    let media = Number

    media = (num1+num2+num3)/3

    let mediaFormatada = media.toFixed(2)

    console.log("Sua média é: ", mediaFormatada)
}

mediaNotas()
