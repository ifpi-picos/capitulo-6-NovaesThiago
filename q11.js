function gerarNumAleatorio(num){
    num = Number(Math.floor(Math.random() * 101))
    return num
}

function jogoAdivinhacao (palpite, num){

    num = gerarNumAleatorio()

    for (let i = 0; i < 10; i++){

        palpite = entradaDeDados()

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

    if (palpite!=num){
        console.log("TENTATIVAS ESGOTADAS ;-;   TENTE NOVAMENTE!")
    }
}

function entradaDeDados(palpite){
    palpite = prompt("Digite o seu papite: ")
    return palpite
}

function regrasJogo(){
    console.log("////////////////////ADIVINHE O NUMERO!/////////////////////")
    console.log("ADIVINHE UM NÚMERO DE 0 À 100")
    console.log("LEMBRE-SE: O JOGADOR TEM 10 TENTATIVAS. BOA SORTE!")

}

function saidaDeDados(){
    regrasJogo()
    jogoAdivinhacao()
}


saidaDeDados()