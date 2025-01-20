let number = 1;
let secondo = 2;
let terzo = 3;
let somma = number + secondo + terzo;
console.log("somma:" + somma);

let differenza = number - secondo - terzo;
console.log("differenza:" + differenza);

if (differenza > 0) {
  console.log(differenza);
} else {
  console.log("numero negativo");
}
let ternario = differenza > 0 ? differenza : "numero negativo ";
console.log(ternario);
differenza > 0
  ? console.log("numero positivo")
  : console.log("numero negativo");

let divisione;
console.log(divisione);

if (secondo !== 0) {
  if (divisione % 2 === 0) {
    console.log("il risultato è pari");
    divisione = number / secondo;
  } else {
    console.log("il risultato è dispari");
  }
} else {
  console.log("impossibile dividere per 0");
}
console.log(divisione);
