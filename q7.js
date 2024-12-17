let varGlobal = "Eu sou a variável Global"

function minhaVarLocal(){
    let varLocal = console.log("Eu sou a variável Local")
}

console.log(varGlobal)
minhaVarLocal()             

/* unica forma de acessar a varLocal é atravez da função, 
se eu não colocar a função ele não vai encontra-la 
pois a variavel esta sendo declarada na mesma*/