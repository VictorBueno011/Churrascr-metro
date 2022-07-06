// Carne- 400 gr por pessoa + 6 horas - 650
// cerveja - 1200 ml por pessoa + 6 horas - 2000ml
//Refrigerante/agua - 1000ml por pessoa + 6 horas 1500ml

// crianças valem por 0,5

let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function calcular(){
    console.log("calculando")

    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    let qdtTotalCarne = carnePorPessoa(duracao) * adultos + (carnePorPessoa(duracao) / 2 * criancas);
    let qdtTotalCerveja = cervejaPorPessoa(duracao) * adultos ;
    let qdtTotalBebidas = bebidasPorPessoa(duracao) * adultos + (bebidasPorPessoa(duracao) / 2 * criancas)

    resultado.innerHTML= `<p class="paragrafos">${qdtTotalCarne / 1000} Kg de Carne</p>`
    resultado.innerHTML+= `<p class="paragrafos">${Math.ceil(qdtTotalCerveja / 355)} latas de Cerveja</p>`
    resultado.innerHTML+= `<p class="paragrafos">${Math.ceil(qdtTotalBebidas /2000)} Garrafas de Refrigante</p>`
}

function carnePorPessoa(duracao){
    if(duracao>=6){
       return 650;
    }
    else{
        return 400;
    }
    
}

function cervejaPorPessoa(duracao){
    if(duracao>=6){
       return 2000;
    }
    else{
        return 1200;
    }
    
}
function bebidasPorPessoa(duracao){
    if(duracao>=6){
       return 1500;
    }
    else{
        return 1000;
    }
    
}