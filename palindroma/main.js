// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

function isPalindroma(word){
  var letter = "";
  var mirrorWord = "";
  var reverseCounter = 0;
  for (var i = 0; i < word.length; i++) {
    reverseCounter = (word.length - i - 1);
    letter = word[reverseCounter]
    mirrorWord += letter;
  }
  if(word == mirrorWord){
    return true;
  };
}

var userWord = prompt("Inserisci una parola");
if (isPalindroma(userWord)) {
  alert("La parola inserita è palindroma");
}
else{
  alert("La parola inserita NON è palindroma")
}
