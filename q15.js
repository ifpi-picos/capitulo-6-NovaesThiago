let num = Number(Math.floor(Math.random() * 101))
let resetGame = Number

while (resetGame!=2) {

    console.log("////////////////////ADIVINHE O NUMERO!/////////////////////")
    console.log("ADIVINHE UM NÚMERO DE 0 À 100")
    console.log("O JOGADOR TERÁ 100 PONTOS, A CADA ERRO ELE PERDERÁ 1 PONTO. BOA SORTE!")

    let pontuacao = Number(100)
    let palpite = Number

    while (true) {

        palpite = prompt("DIGITE O SEU PALPITE: ") 
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
    }      

    num = (Math.floor(Math.random() * 101)) //vai escolher outro numero aleatorio para reiniciar o jogo
    resetGame = prompt("DESEJA JOGAR NOVAMENTE?          1(SIM)    2(NÃO)")
}
console.log("GAME OVER")


//ainda em execução