//Permesso di inserire il nome all'utente
let first_name = prompt("Inserisci il tuo nome");
console.log(first_name);

//Permesso di inserire il cognome all'utente
let last_name = prompt("Inserisci il tuo cognome");
console.log(last_name);

//Permesso di inserire il colore all'utente
let color = prompt("Inserisci il tuo colore preferito");
console.log(color);

//Creo una variabile dove assegno i valori inseriti precedentemente con il  valore 23
let string = `${first_name}${last_name}${color}23`;
console.log(string);
