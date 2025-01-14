// COSA SO
const costoBiglAlKm = 0.21;
let sconto = 0;
let scontoMinorenni = 0.8;
let scontoAnziani = 0.6;

// COSA CHIEDO
let km = parseInt(prompt("Inserisci il numero di km che prevedi di percorrere"));
let età = parseInt(prompt("Inserisci la tua età"));

// • parseInt() trasforma il dato inserito da stringa (standard) a numerico.
// • prompt() permette all'utente di inserire a tutti gli effetti il dato richiesto. 

// CALCOLO IL PREZZO
let prezzoStandard = km * costoBiglAlKm;
let prezzoFinale;

if (età < 18){
    prezzoFinale = prezzoStandard * scontoMinorenni;
    // se è davvero minorenne, allora:
    console.log(`Il costo del tuo biglietto è: € ${prezzoFinale}`);

} else if (età > 65){
    prezzoFinale = prezzoStandard * scontoAnziani;
    // se è davvero over 65, allora:
    console.log(`Il costo del tuo biglietto è: € ${prezzoFinale}`);

} else {
    prezzoFinale = prezzoStandard;
    // se nessuna delle due, allora:
    console.log(`Il costo del tuo biglietto è: € ${prezzoFinale}`);
}

// "console.log(prezzoFinale)" potrei anche metterlo una sola volta al di fuori dei blocchi. 

// MOSTRO SOLO DUE DECIMALI
prezzoFinale = prezzoFinale.toFixed(2);

