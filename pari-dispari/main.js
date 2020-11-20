// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.
// Consigli del giorno
// 1. Scriviamo sempre in italiano i passaggi che vogliamo fare
// 2. Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.

/**Restituisce true se l'argomento è dispari;
 *
 */
function isOdd(number) {
  number = Number(number);
  if(number % 2 !== 0){
    return true;
  }
  else if(number % 2 === 0){
    return false;
  }
  else{
    return "error";
  }
}

/**Restituisce un numero casuale da 1 a 5
 *
 */
function randomFive(min, max) {
   return Math.floor(Math.random() * (max - min)) + min;
}

/**Restituisce true se l'utente ha scelto dispari.
 *
 */
function isChoiceOdd(choice) {
  choice = choice.toLowerCase();
  if(typeof choice === "string"){
    if (choice === "dispari") {
      return true;
    }
    else if (choice === "pari") {
      return false;
    }
    else{
      return "error";
    }
  }
  else{
    return "error";
  }
}

var userChoice = prompt("Scegli 'pari' o 'dispari'");
var userNumber = prompt("Inserisci un numero da 1 a 5");
var sum = userNumber + randomFive(1, 5);


if(isChoiceOdd(userChoice) === "error" || isOdd(userNumber) === "error"){
  alert("Dati inseriti non correttamente");
}
else{
  if (isChoiceOdd(userChoice) === isOdd(sum)) {
    alert("Hai vinto! Hai scelto: "+ userChoice + " ed è uscito " + sum);
  }
  else{
    alert("Hai perso. Hai scelto: "+ userChoice + " ed è uscito " + sum);
  }
}
