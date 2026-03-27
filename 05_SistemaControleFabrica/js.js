let maquinas = [
    { nome: "Prensa A", capacidade: 100 },
    { nome: "Cortadora B", capacidade: 80 },
    { nome: "Dobradeira C", capacidade: 120 },
    { nome: "Montadora D", capacidade: 60 }
];

let ordens = [
    { maquina: "Prensa A", quantidade: 40 },
    { maquina: "Dobradeira C", quantidade: 90 },
    { maquina: "Prensa A", quantidade: 70 },
    { maquina: "Cortadora B", quantidade: 50 },
    { maquina: "Montadora D", quantidade: 60 }
];

let nomeMaisProduziu = "";
let quantidadeMaisProduziu = 0;

let nomeMenosProduziu = "";
let quantidadeMenosProduziu = Infinity;

let totalGeralProduzido = 0;

for (let i = 0; i < maquinas.length; i++) {

    let totalProduzidoPorCadaMaquina = 0;

    for (let j = 0; j < ordens.length; j++) {

        if (maquinas[i].nome === ordens[j].maquina) {
            totalProduzidoPorCadaMaquina += ordens[j].quantidade;
            totalGeralProduzido += ordens[j].quantidade;
        }
    }

    console.log("A máquina " + maquinas[i].nome + " produziu: " + totalProduzidoPorCadaMaquina);

    if(totalProduzidoPorCadaMaquina > maquinas[i].capacidade){
        console.log("A máquina "+ maquinas[i].nome + " está sobrecarregada!");
    }

    if(quantidadeMaisProduziu < totalProduzidoPorCadaMaquina){
        quantidadeMaisProduziu = totalProduzidoPorCadaMaquina;
        nomeMaisProduziu = maquinas[i].nome;
    }

    if(quantidadeMenosProduziu > totalGeralProduzido){
        quantidadeMenosProduziu = totalProduzidoPorCadaMaquina;
        nomeMenosProduziu = maquinas[i].nome;
    }
    
    if(totalProduzidoPorCadaMaquina === maquinas[i].capacidade){
        console.log("A máquina "+ maquinas[i].nome + " está zerada!");
    }
}   
console.log("A máquina " +nomeMaisProduziu+ " foi a que mais produziu!");
console.log("A máquinha " +nomeMenosProduziu+ " foi a que menos produziu!");
console.log("Total de produtos produzidos: "+totalGeralProduzido);