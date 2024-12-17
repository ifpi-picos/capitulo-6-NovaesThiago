function concat(){
    let string1 = ("Hello ")
    let string2 = ("World")
    let result = string1.concat("", string2)
    console.log(result)
}

function upperCase(){
    let texto = "hello world!"
    let textoMaiusculo = texto.toUpperCase()
    console.log(textoMaiusculo)
}

function lowCase(){
    let texto = "HELLO WORLD!"
    let textoMinusculo = texto.toLowerCase()
    console.log(textoMinusculo)
}

function posicaoDaLetra (){
    let texto = "Hello World"
    let caractere = texto.charAt(7)
    console.log(caractere)
}