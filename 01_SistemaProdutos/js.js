let produtos = [
    { nome: "Notebook", preco: 3500, estoque: 5 },
    { nome: "Mouse", preco: 80, estoque: 25 },
    { nome: "Teclado", preco: 150, estoque: 10 },
    { nome: "Monitor", preco: 900, estoque: 3 },
    { nome: "Headset", preco: 250, estoque: 8 }
];

let caros = [];
let baixoEstoque = [];

let valorTotalProduto = 0;
let valorTotalEstoque = 0;

let produtoMaiorPreco = produtos[0].preco;
let nomeProdutoMaiorPreco = produtos[0].nome;

let produtoMenorPreco = produtos[0].preco;
let nomeProdutoMenorPreco = produtos[0].nome;

let somaTotalPrecos = 0;
let mediaTotalPrecos = 0;

for(let i = 0; i < produtos.length; i++){
    valorTotalProduto += produtos[i].preco * produtos[i].estoque;
    valorTotalEstoque += valorTotalProduto;

    if (produtoMaiorPreco < produtos[i].preco){
        produtoMaiorPreco = produtos[i].preco;
        nomeProdutoMaiorPreco = produtos[i].nome;
    }
    
    if (produtoMenorPreco > produtos[i].preco){
        produtoMenorPreco = produtos[i].preco;
        nomeProdutoMenorPreco = produtos[i].nome;
    }

    if(produtos[i].preco > 500){
        caros.push(produtos[i].nome);
    }

    if(produtos[i].estoque < 5){
        baixoEstoque.push(produtos[i].nome);
    }

    somaTotalPrecos += produtos[i].preco;
    mediaTotalPrecos = somaTotalPrecos / produtos.length


}
console.log("Valor total do estoque: "+valorTotalEstoque);
console.log("Produto com maior preço: "+nomeProdutoMaiorPreco);
console.log("Produto com menor preço: "+nomeProdutoMenorPreco);
console.log("Produtos caros: "+caros);
console.log("Produtos com baixo estoque: "+baixoEstoque);
console.log("Média total de preços: " + mediaTotalPrecos);


