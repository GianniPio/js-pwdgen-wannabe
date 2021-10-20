// // chiedere nome, cognome e colore all'utente, 
// poi generare una password con tutto unito 
// + il numero 21


// variabili
let userName;
let userLastName;
let color;
const numberPass = 21;

// Chiedere all'utente di inserire il suo nome
userName = prompt("Inserisci il tuo nome");

// Chiedere all'utente di inserire il suo cognome
userLastName = prompt("Inserisci il tuo cognome");

// Chiedere all'utente di inserire il suo colore preferito
color = prompt("Inserisci il tuo colore preferito");

// unire tutte le variabili per formare la password
const userPassword = userName+ userLastName+ color+ numberPass;

// stampa della password
document.getElementById("users_password").innerHTML = userPassword;

