console.log("CONVERSOR REAL(R$) PARA DOLAR($): ")

function conversorRealParaDolar (real, dolar){
    real = Number(prompt("DIgite o valor em Real: "))
    dolar = Number((real/5.94))
    console.log(dolar)
}

conversorRealParaDolar()