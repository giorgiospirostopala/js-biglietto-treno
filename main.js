// COSA SO
const costoBiglAlKm = 0.21
let sconto = 0
let scontoMinorenni = 0.20
let scontoAnziani = 0.40

// COSA CHIEDO
let km = parseInt(prompt("Inserisci il numero di km che prevedi di percorrere"))
let età = parseInt(prompt("Inserisci la tua età"))

// • parseInt() trasforma il dato inserito da stringa (standard) a numerico.
// • prompt() permette all'utente di inserire a tutti gli effetti il dato richiesto. 

// CALCOLO DEL PREZZO
let prezzoStandard = km * costoBiglAlKm
