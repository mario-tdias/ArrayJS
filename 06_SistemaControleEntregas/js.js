let motoristas = [
    { nome: "João", kmLimite: 300 },
    { nome: "Carla", kmLimite: 250 },
    { nome: "Rafael", kmLimite: 400 },
    { nome: "Bianca", kmLimite: 200 }
];

let entregas = [
    { motorista: "João", km: 120 },
    { motorista: "Carla", km: 180 },
    { motorista: "Rafael", km: 350 },
    { motorista: "João", km: 90 },
    { motorista: "Bianca", km: 210 },
    { motorista: "Rafael", km: 80 }
];

let acimaDoLimite = [];
let dentroDoLimite = [];

let nomeMotoristaMaisRodou = "";
let valorMotoristaMaisRodou = 0;

let nomeMotoristaMenosRodou = "";
let valorMotoristaMenosRodou = Infinity;

let totalKMDia = 0;

let custoTotal = 0;

for(let i = 0; i < motoristas.length; i++){

    let KMMotorista = 0;
    for(let j = 0; j < entregas.length; j++){
        if(motoristas[i].nome === entregas[j].motorista){
            KMMotorista += entregas[j].km;
            totalKMDia += entregas[j].km;
        }
        
    }
     console.log("Nome motorista: " +motoristas[i].nome + " rodou: " +KMMotorista);
     if(KMMotorista > valorMotoristaMaisRodou){
        valorMotoristaMaisRodou = KMMotorista;
        nomeMotoristaMaisRodou = motoristas[i].nome;
     }

     if(KMMotorista < valorMotoristaMenosRodou){
        valorMotoristaMenosRodou = KMMotorista;
        nomeMotoristaMenosRodou = motoristas[i].nome;
     }

     if(KMMotorista > motoristas[i].kmLimite){
        console.log(motoristas[i].nome + " Ultrapassou o limite de km!");
        acimaDoLimite.push(motoristas[i].nome);
     } else {
        dentroDoLimite.push(motoristas[i].nome);
     }
}
custoTotal = totalKMDia * 2;

console.log("Motorista que mais rodou: "+nomeMotoristaMaisRodou);
console.log("Motorista que menos rodou: "+nomeMotoristaMenosRodou);
console.log("Total de km rodados no dia: "+totalKMDia);
console.log("Custo total: R$"+custoTotal);
console.log("Motoristas acima do limite: "+acimaDoLimite);
console.log("Motoristas dentro do limite: "+dentroDoLimite);