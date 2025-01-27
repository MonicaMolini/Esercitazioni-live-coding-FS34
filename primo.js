const numeri = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const numeriPari = numeri.filter((number) => number % 2 === 0);

const sommaPari = numeriPari.reduce((sum, number) => sum + number, 0);

console.log("Numeri pari:", numeriPari);
console.log("Somma dei numeri pari:", sommaPari);

