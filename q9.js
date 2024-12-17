
const saidaDeDados = () =>{
    console.log("Hello World")
}

const entradaDeDados = (a) => {
    a = prompt("Digite uma palavra: ")
}

const numeroInteiro = (a) => {
    a = parseInt
    console.log(a)
}

const numeroFloat = (a) => {
    a = parseFloat
    console.log(a)
}

const diaDoMes = (dia) => {
   dia = new Date().getDate()
   console.log(dia)
}

const concat = (string1,string2, result) => {
    string1 = ("Hello ")
    string2 = ("World")
    result = string1.concat("", string2)
    console.log(result)
}

const upperCase = (texto, textoMaiusculo) => {
    texto = "hello world!"
    textoMaiusculo = texto.toUpperCase()
    console.log(textoMaiusculo)
}

const lowCase = (texto, textoMinusculo) => {
    texto = "HELLO WORLD!"
    textoMinusculo = texto.toLowerCase()
    console.log(textoMinusculo)
}

const posicaoDaLetra = (texto, caractere) => {
    texto = "Hello World"
    caractere = texto.charAt(7)
    console.log(caractere)
}

const mediaNotas = (num1, num2, num3, media, mediaFormatada) => {
    num1 = parseFloat(prompt("Digite a primeira nota: "))
    num2 = parseFloat(prompt("Digite a segunda nota: "))
    num3 = parseFloat(prompt("Digite a terceira nota: "))
    media = Number

    media = (num1+num2+num3)/3

    mediaFormatada = media.toFixed(2)

    console.log("Sua média é: ", mediaFormatada)
}

const quadradoDoNumero = (num, result) => {
    num = Number(prompt("Digite o número: "))
    result = Number

    result = (num*num)

    console.log("O resultado é: ", result)
}

saidaDeDados()
