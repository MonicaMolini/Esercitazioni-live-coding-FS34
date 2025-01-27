//Dato il seguente array di parole, trasforma tutte le parole in maiuscolo e poi conta quante lettere ci sono in totale.

const parole = ["ciao", "albero", "parco", "mese", "divertimento"];


const paroleMaiuscole = parole.map(parola => parola.toUpperCase());

const numeroTotaleLettere = paroleMaiuscole.reduce((sum, parola) => sum + parola.length, 0);

console.log("Parole in maiuscolo:", paroleMaiuscole);
console.log("Numero totale di lettere:", numeroTotaleLettere);
