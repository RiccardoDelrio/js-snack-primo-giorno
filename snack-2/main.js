/* 
l'utente iserisce due parole in successione, con due prompt. il software stampa prima la
parola piu corta */

const firstWord = String(prompt("inserisci la prima parola"))
const secondWord = String(prompt("inserisci la prima parola"))
console.log(firstWord, secondWord);

if (firstWord.length < secondWord.length) {
    console.log(firstWord);
    console.log(secondWord);

}
else if (firstWord.length == secondWord.length) {
    console.log(`Le parole hanno la stessa lunghezza, esattamente di ${firstWord.length} caratteri`)
} else {
    console.log(secondWord);
    console.log(firstWord);
}

