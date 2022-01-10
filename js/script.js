console.log('hello world')


// Mail
// Crea un array di email;
// Chiedi all’utente la sua email.
// controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato in console sull’esito del controllo.


// const list = ['aaa@gmail.com', 'bbb@gmail.com', 'ccc@gmail.com', 'aaa@gmail.com'];
// let email = prompt("Inserisci la tua email!");
// console.log(email);

// let validEmail = 0;

// for (i = 0; i < list.length; i++) {
//     // se l'email coincide
//     if (email == list[i]) {
//         validEmail++;
//     }
// }

// console.log(validEmail);

// if (validEmail >= 1) {
//     console.log(`la tua email (${email}) è valida`);
// } else {
//     console.log(`la tua email (${email}) non è valida`);
// }




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