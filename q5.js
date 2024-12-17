//Mesmo código da quesão 3 (por ser o mesmo pedido da questão reutilizei)


function mediaNotas (num1, num2, num3, media, mediaFormatada){
    num1 = parseFloat(prompt("Digite a primeira nota: "))
    num2 = parseFloat(prompt("Digite a segunda nota: "))
    num3 = parseFloat(prompt("Digite a terceira nota: "))
    media = Number

    media = (num1+num2+num3)/3

    mediaFormatada = media.toFixed(2)

    console.log("Sua média é: ", mediaFormatada)
}

mediaNotas()