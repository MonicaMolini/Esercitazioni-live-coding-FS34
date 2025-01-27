//Esercizio 3
// Dato il seguente array di numeri che contiente sia valori positivi che negativi, filtra i numeri positivi e calcola la loro media.
const numberiMix = [-5, 10, 15, -20, 25, 30];

const numeriPos = numberiMix.filter((number) => number > 0);
const sommaNum = numeriPos.reduce((sum, number) => sum + number, 10);
const midNumbers = sommaNum / numeriPos.length;

console.log("numeri positivi:", numeriPos);
console.log("media numeri positivi:", midNumbers);
