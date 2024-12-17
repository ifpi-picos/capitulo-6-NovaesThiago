function calculadoraDeImc (){
    
    let peso = Number(prompt("Digite o peso do usuário: "))
    let altura = Number(prompt("Digite a altura do usuário: "))
    let imc = Number

    imc = peso/(altura*altura)

    if (imc<18.5){
        console.log("Abaixo do peso.")
        }else if (imc>=18.5 && imc<24.9) {
            console.log("Peso normal.")
            
        }else if (imc>=24.9 && imc<29.9){
            console.log("Pré-obesidade.")
        
        }else if (imc>=29.9 && imc<34.9){
            console.log("Obesidade Grau 1.")
        
        }else if (imc>=34.9 && imc<39.9){
            console.log("Obesidade Grau 2.")
        
        }else if (imc>=39.9){
            console.log("Obesidade Grau 3.")
       
        } else {
            console.log("Resultado inválido.")
        }
}

calculadoraDeImc()
