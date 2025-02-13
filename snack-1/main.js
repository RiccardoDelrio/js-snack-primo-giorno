/* L'utente inserisce due numeri in successione, con due prompt.
il software stampa il maggiore. */

const numberOne = prompt("Inserisci il primo numero")
const numberTwo = prompt("Inserisci il Secondo  numero")
console.log(numberOne);
console.log(numberTwo);

if (numberOne > numberTwo) {
    console.log("il numero maggiore è " + numberOne);
}
else if (numberOne == numberTwo) {
    console.log("i due numeri sono uguali");

} else {
    console.log("il numero maggiore è " + numberTwo);



}



