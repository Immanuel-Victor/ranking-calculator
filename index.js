let vitorias = 89;
let derrotas = 25;
const elos = ["Ferro", "Bronze", "Prata", "Ouro", "Diamante", "Lendário", "Imortal"]

function calcularSaldo(vitorias, derrotas) {
  return vitorias - derrotas;
}

const saldo = calcularSaldo(vitorias, derrotas)

function imprimirElo(saldo) {
  if(saldo <= 10){
    console.log(`O Herói tem de saldo de ${saldo} está no nivel ${elos[0]}`);
  } else if (10 < saldo && saldo <= 20) {
    console.log(`O Herói tem de saldo de ${saldo} está no nivel ${elos[1]}`);
  } else if (20 < saldo && saldo <= 50) {
    console.log(`O Herói tem de saldo de ${saldo} está no nivel ${elos[2]}`);
  } else if (50 < saldo && saldo <= 80) {
    console.log(`O Herói tem de saldo de ${saldo} está no nivel ${elos[3]}`);
  } else if (80 < saldo && saldo <= 90) {
    console.log(`O Herói tem de saldo de ${saldo} está no nivel ${elos[4]}`);
  } else if (90 < saldo && saldo <= 100) {
    console.log(`O Herói tem de saldo de ${saldo} está no nivel ${elos[5]}`);
  } else {
    console.log(`O Herói tem de saldo de ${saldo} está no nivel ${elos[6]}`);
  }
}

imprimirElo(saldo);