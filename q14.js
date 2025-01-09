
function entradaDeDados(peso, altura){
    peso = Number(prompt("Digite o peso do usuário: "))
    altura = Number(prompt("Digite a altura do usuário: "))
    return [peso, altura]
}

function calculadoraDeImc (index){
    let peso = index[0]
    let altura = index[1]
    let imc = peso/(altura*altura)

    if (imc<18.5){
        return"Abaixo do peso."
        }else if (imc>=18.5 && imc<24.9){
            return "Peso normal."
            
        }else if (imc>=24.9 && imc<29.9){
            return "Pré-obesidade."
        
        }else if (imc>=29.9 && imc<34.9){
            return "Obesidade Grau 1."
        
        }else if (imc>=34.9 && imc<39.9){
            return "Obesidade Grau 2."
        
        }else if (imc>=39.9){
            return "Obesidade Grau 3."
       
        } else {
            return "Resultado inválido."
        }
}

function saidaDeDados(){
    let valores = entradaDeDados()
    let resultado = calculadoraDeImc(valores)
    console.log(resultado)
}

saidaDeDados()
