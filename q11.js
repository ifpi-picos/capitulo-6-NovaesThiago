
    let num = Number(Math.floor(Math.random() * 101))
    let resetGame = Number

//esse while vai fazer o jogo resetar quando o usuario digitar numeros diferente de 2
    while (resetGame!=2) {
        console.log("////////////////////ADIVINHE O NUMERO!/////////////////////")
        console.log("ADIVINHE UM NÚMERO DE 0 À 100")
        console.log("LEMBRE-SE: O JOGADOR TEM 10 TENTATIVAS. BOA SORTE!")

        
        if (palpite!=num){
            console.log("TENTATIVAS ESGOTADAS ;-;   TENTE NOVAMENTE!")
        }

    console.log("O NÚMERO SECRETO ERA:", num)
    num = (Math.floor(Math.random() * 101)) //vai escolher outro numero aleatorio para reiniciar o jogo
    resetGame = prompt("DESEJA JOGAR NOVAMENTE?          1(SIM)    2(NÃO)")
    }


console.log("GAME OVER")



function gerarNumAleatorio(num){
    num = Number(Math.floor(Math.random() * 101))
    return num
}

function resetarJogo(){

}

function entradaDeDados(){
    
}

function processamentoPalpites (){

let palpite = Number
for (let i = 0; i < 10; i++){

    if (palpite < 0){
        console.log("NÚMERO INVALIDO") 
    }else if (palpite == num){
        console.log("PARABÉNS! VOCÊ ACERTOU!")
    break
    } else if (palpite < num){ 
        console.log("O NÚMERO SECRETO É MAIOR QUE O PALPITE DIGITADO")
    }else {
        console.log("O NÚMERO SECRETO É MENOR QUE O PALPITE DIGITADO")
    }
}
}