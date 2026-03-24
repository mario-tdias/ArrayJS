let quartos = [
    { numero: 101, preco: 200, disponivel: true, faturamento: 0 },
    { numero: 102, preco: 150, disponivel: true, faturamento: 0 },
    { numero: 103, preco: 300, disponivel: true, faturamento: 0 },
    { numero: 104, preco: 250, disponivel: true, faturamento: 0 },
    { numero: 105, preco: 180, disponivel: true, faturamento: 0 }
];

let reservas = [
    { numero: 101, dias: 3 },
    { numero: 103, dias: 2 },
    { numero: 105, dias: 5 },
    { numero: 102, dias: 1 },
    { numero: 101, dias: 2 } // tentativa de reservar de novo
];

let ocupados = [];
let disponiveis = [];

let faturamentoTotal = 0;

let nomeMaiorFaturamento = "";
let valorMaiorFaturamento = 0;

let nomeMenorFaturamento = "";
let valorMenorFaturamento = Infinity;

// PROCESSAR RESERVAS
for (let i = 0; i < reservas.length; i++) {
    let achou = false;

    for (let j = 0; j < quartos.length; j++) {
        if (reservas[i].numero === quartos[j].numero) {
            achou = true;

            if (!quartos[j].disponivel) {
                console.log("Quarto " + reservas[i].numero + " já está ocupado!");
                break;
            }

            // Marcar como ocupado
            quartos[j].disponivel = false;

            // Calcular faturamento
            let valor = reservas[i].dias * quartos[j].preco;
            quartos[j].faturamento += valor;
            faturamentoTotal += valor;

            console.log("Reserva feita no quarto " + reservas[i].numero + 
                        " — valor: R$" + valor);
        }
    }

    if (!achou) {
        console.log("Quarto " + reservas[i].numero + " não existe!");
    }
}

// ANÁLISE FINAL
for (let i = 0; i < quartos.length; i++) {
    if (quartos[i].faturamento > valorMaiorFaturamento) {
        valorMaiorFaturamento = quartos[i].faturamento;
        nomeMaiorFaturamento = quartos[i].numero;
    }

    if (quartos[i].faturamento < valorMenorFaturamento && quartos[i].faturamento > 0) {
        valorMenorFaturamento = quartos[i].faturamento;
        nomeMenorFaturamento = quartos[i].numero;
    }

    if (quartos[i].disponivel) {
        disponiveis.push(quartos[i].numero);
    } else {
        ocupados.push(quartos[i].numero);
    }
}

console.log("Faturamento total: R$" + faturamentoTotal);
console.log("Quarto que mais faturou: " + nomeMaiorFaturamento + " (R$" + valorMaiorFaturamento + ")");
console.log("Quarto que menos faturou: " + nomeMenorFaturamento + " (R$" + valorMenorFaturamento + ")");
console.log("Ocupados: " + ocupados);
console.log("Disponíveis: " + disponiveis);