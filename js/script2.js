//  Gioco dei dadi
//  Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.
// Stampare in console i tiri di dado e il risultato.


let maxNumber = 6;
let minNumber = 1;

let userNumber = Math.floor((Math.random() * maxNumber) + minNumber);
let computerNumber = Math.floor((Math.random() * maxNumber) + minNumber);


console.log(userNumber);
console.log(computerNumber);

if (userNumber > computerNumber) {
    console.log('Hai vinto!');
} else if (userNumber < computerNumber) {
    console.log('Ha vinto il tuo avversario!');
} else if (userNumber === computerNumber) {
    console.log('Pareggio!');
}