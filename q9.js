let a

const saidaDeDados = () =>{
    console.log("Hello World")
}

const entradaDeDados = () => {
    a = prompt("Digite uma palavra: ")
}

const numeroInteiro = () => {
    a = parseInt
    console.log(a)
}

const numeroFloat = () => {
    a = parseFloat
    console.log(a)
}

const diaDoMes = () => {
   let dia = new Date().getDate()
   console.log(dia)
}

const concat = () => {
    let string1 = ("Hello ")
    let string2 = ("World")
    let result = string1.concat("", string2)
    console.log(result)
}

const upperCase = () => {
    let texto = "hello world!"
    let textoMaiusculo = texto.toUpperCase()
    console.log(textoMaiusculo)
}

const lowCase = () => {
    let texto = "HELLO WORLD!"
    let textoMinusculo = texto.toLowerCase()
    console.log(textoMinusculo)
}

const posicaoDaLetra = () => {
    let texto = "Hello World"
    let caractere = texto.charAt(7)
    console.log(caractere)
}

const mediaNotas = () => {
    let num1 = parseFloat(prompt("Digite a primeira nota: "))
    let num2 = parseFloat(prompt("Digite a segunda nota: "))
    let num3 = parseFloat(prompt("Digite a terceira nota: "))
    let media = Number

    media = (num1+num2+num3)/3

    let mediaFormatada = media.toFixed(2)

    console.log("Sua média é: ", mediaFormatada)
}

const quadradoDoNumero = () => {
    let num = Number(prompt("Digite o número: "))
    let result = Number

    result = (num*num)

    console.log("O resultado é: ", result)
}

saidaDeDados()