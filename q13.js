console.log("CONVERSOR REAL(R$) PARA DOLAR($): ")

function conversorRealParaDolar (){
    let real = Number(prompt("DIgite o valor em Real: "))
    let dolar = Number((real/5.94))
    console.log(dolar)
}

conversorRealParaDolar()