/* Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array. */

const oddNumbers = []
for (i = 0; i < 6; i++) {
    const userNumber = Number(prompt("inserisci il tuo numero"))
    if (userNumber % 2 != 0) {

        oddNumbers.push(userNumber)
    }
}
console.log(oddNumbers);
