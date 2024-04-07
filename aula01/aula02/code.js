
let c1 = "vermelho"
let c2 = "rosa"
let c3 = "amarelo"
let c4 = "branca"
let c5 = "verde"

//Formato JSON
const json = [
                {co1:"vermelho",cor2:"rosa",co3: "verde",co4: "amarelo", co5: "branca"},
                {fr1:"morango",fr2:"abacaxi",fr3:"maracujá",fr4:"laranja",fr5:"melão"}
             ]

const dados = [c1,c2,c3,c4,c5] 

let cor = "verde"

for(let i=0;i<dados.length;i++){

    if(cor == dados[i]){
        console.log("Encontrou " + i) 
        break
    } else{
        console.log("Não encontrou!")
    }

}

//console.log(dados.length)
