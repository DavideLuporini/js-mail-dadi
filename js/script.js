console.log('hello world')


// Mail
// Crea un array di email;
// Chiedi all’utente la sua email.
// controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato in console sull’esito del controllo.


const list = ['aaa@gmail.com', 'bbb@gmail.com', 'ccc@gmail.com', 'aaa@gmail.com'];
let email = prompt("Inserisci la tua email!");
console.log(email);

let validEmail = 0;

for (i = 0; i < list.length; i++) {
    // se l'email coincide
    if (email == list[i]) {
        validEmail++;
    }
}

console.log(validEmail);

if (validEmail >= 1) {
    console.log(`la tua email (${email}) è valida`);
} else {
    console.log(`la tua email (${email}) non è valida`);
}