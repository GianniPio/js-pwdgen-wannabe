// // chiedere nome, cognome e colore all'utente, 
// poi generare una password con tutto unito 
// + il numero 21


// variabili
let userName;
let userLastName;
let color;
let userPassword;

// Chiedere all'utente di inserire il suo nome
userName = prompt("Inserisci il tuo nome");

// Chiedere all'utente di inserire il suo cognome
userLastName = prompt("Inserisci il tuo cognome");

// Chiedere all'utente di inserire il suo colore preferito
color = prompt("Inserisci il tuo colore preferito");

// unire tutte le variabili per formare la password
userPassword = userName+ userLastName+ color+ 21;

// stampa della password
document.getElementById("users_password").innerHTML = userPassword;


// controllo dati
console.log(userName);
console.log(userLastName);
console.log(color);
console.log(userPassword);