function gerarNumAleatorio(num){
    num = Number(Math.floor(Math.random() * 101))
    return num
}

function regrasJogo(){
    console.log("////////////////////ADIVINHE O NUMERO!/////////////////////")
    console.log("ADIVINHE UM NÚMERO DE 0 À 100")
    console.log("LEMBRE-SE: O JOGADOR TEM 10 TENTATIVAS. BOA SORTE!")

}

function entradaDeDados(palpite){
    palpite = prompt("Digite o seu papite: ")
    return palpite
}

function jogoAdivinhacao(palpite){
    
    palpite = entradaDeDados()
    let num = gerarNumAleatorio()
    let pontuacao = Number(100)
    

    while (true) {

        
        if (palpite == num){
            console.log("PARABÉNS! VOCÊ ACERTOU!")
            console.log("SUA PONTUAÇÃO FOI: ", pontuacao)
            console.log("O NÚMERO SECRETO ERA:", num)
            break
        }else if (palpite<0){
            console.log("NÚMERO INVALIDO")
            pontuacao = (pontuacao-1)
        } else if (palpite<num){ 
            console.log("O NÚMERO SECRETO É MAIOR QUE O PALPITE DIGITADO")
            pontuacao = (pontuacao-1)
        }else {
            console.log("O NÚMERO SECRETO É MENOR QUE O PALPITE DIGITADO")
            pontuacao = (pontuacao-1)
        }
    palpite = entradaDeDados()
    }      
    console.log("GAME OVER")
}

function saidaDeDados(){
    regrasJogo()
    jogoAdivinhacao()
}

saidaDeDados()
