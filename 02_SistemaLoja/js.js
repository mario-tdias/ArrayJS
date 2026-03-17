let produtos = [
    { nome: "Notebook", preco: 3500, estoque: 5 },
    { nome: "Mouse", preco: 80, estoque: 20 },
    { nome: "Teclado", preco: 150, estoque: 10 },
    { nome: "Monitor", preco: 900, estoque: 4 },
    { nome: "Headset", preco: 250, estoque: 6 }
];

let vendas = [
    { nome: "Mouse", quantidade: 3 },
    { nome: "Monitor", quantidade: 2 },
    { nome: "Notebook", quantidade: 1 },
    { nome: "Headset", quantidade: 2 }
];

let faturamento = 0;

for(let i = 0; i < vendas.length; i++){
    for(let j = 0; j < produtos.length; j++){
        if(vendas[i].nome == produtos[j].nome){
            produtos[j].estoque -= vendas[i].quantidade;
            faturamento += produtos[j].preco * vendas[i].quantidade;
        }
    }
    
}
console.log(produtos);
console.log("Faturamento diário: "+faturamento);