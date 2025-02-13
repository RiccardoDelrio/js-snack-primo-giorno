/* Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti. */
let numbersArray = []
for (let i = 0; i < 10; i++) {
    const userNumber = Number((prompt("Inserisci un numero:")))
    numbersArray.push(userNumber)
}
console.log(numbersArray);
let somma = 0
for (let i = 0; i < numbersArray.length; i++) {
    somma += (numbersArray[i])

}
console.log(somma);
