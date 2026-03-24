let livros = [
    { titulo: "Dom Casmurro", autor: "Machado de Assis", copias: 4 },
    { titulo: "1984", autor: "George Orwell", copias: 2 },
    { titulo: "O Hobbit", autor: "Tolkien", copias: 3 },
    { titulo: "Harry Potter", autor: "J.K. Rowling", copias: 5 },
    { titulo: "A Revolução dos Bichos", autor: "George Orwell", copias: 1 }
];
let emprestimos = [
    { titulo: "1984", quantidade: 1 },
    { titulo: "O Hobbit", quantidade: 2 },
    { titulo: "Dom Casmurro", quantidade: 3 },
    { titulo: "1984", quantidade: 2 }, // tentativa com mais do que disponível
    { titulo: "A Revolução dos Bichos", quantidade: 1 }
];

let emprestados = [];
let indisponiveis = [];

let totalLivroEmprestados = 0;


for(let i = 0; i < livros.length; i++){
    for(let j = 0; j < emprestimos.length; j++){
        if(livros[i].titulo == emprestimos[j].titulo){
          
            if (livros[i].copias >= emprestimos[j].quantidade){
                livros[i].copias -= emprestimos[j].quantidade;
                totalLivroEmprestados += emprestimos[j].quantidade;
                console.log("Empréstimo realizado: " + livros[i].titulo);
            } else {
                console.log("Não há cópias suficientes de " + livros[i].titulo);
            }
        } 
        if(emprestimos[j].quantidade > 0){
            emprestados.push(livros[i].titulo);
        } if(livros[i].copias == 0){
            indisponiveis.push(livros[i].titulo);
        }
        

    }
}

for(let i = 0; i < livros.length; i++){

}
console.log(emprestados);
console.log(indisponiveis);
console.log(livros);
console.log("Livros emprestados: "+totalLivroEmprestados);
