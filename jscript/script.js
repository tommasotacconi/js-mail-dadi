/* ESERCIZIO 1 - Gioco dei dadi
1. Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
2. Stabilire il vincitore, in base a chi fa il punteggio più alto.
3. Stampiamo in pagina i due tiri e il risultato
 */

/* //SET UP PHASE
const winnerSentence = document.getElementById('winner-sentence');
const dice1Number = document.getElementById('dice1-number')
const dice2Number = document.getElementById('dice2-number')
console.log(winnerSentence, dice1Number, dice2Number)
//1.
const player1Dice = Math.floor(Math.random() * 6) + 1; //(0-5), +1, (1-6)
const player2Dice = Math.floor(Math.random() * 6) + 1;

console.log('player1Dice', player1Dice, 'player2Dice', player2Dice)

//PROCESSING PHASE
//2.
let winner;

if (player1Dice > player2Dice) {
  winner = "Giocatore 1";
} else if (player1Dice < player2Dice) {
  winner = "Giocatore 2";
}

console.log(winner);

//FINAL RESULT
//.3
dice1Number.innerText = player1Dice;
dice2Number.innerText = player2Dice;

if (player1Dice != player2Dice) {
  winnerSentence.innerHTML += winner
} else {
  winnerSentence.innerHTML = "Non c'è nessun vincitore"
}
 */

/* ESERCIZIO 2 - Finta Login
1. Inventa una lista di email autorizzate
2. Chiedi all’utente la sua email, con un piccolo form.
3. Controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
 */

// SET UP PHASE
//1.
const emails = ['davide.sassi@live.it', 'maria.casale@outlook.com', 'teresa.salari@gmail.com', 'angela.pavoni@gmail.com', 'marcello.bernardi@gmail.com', 'roberto.fresoli@tiscali.it', 'giovanni.ponte@virgilio.com', 'alberto.santi@gmail.com'];
console.table(emails);
const emailField = document.querySelector('input');
const loginButton = document.querySelector('button');
let insertedEmail;
console.log(emailField);


// DATA FINDING
//2.
loginButton.addEventListener('click', function () {
  insertedEmail = emailField.value.trim();
  console.log (insertedEmail);

  //DATA PROCESSING
  //3.
  let emailControl = 'Unauthorized email';
  for (i = 0; i < emails.length; i++) {
    console.log(emails[i]);
    if (insertedEmail == emails[i]) emailControl = 'Successful login';
    console.log(emailControl);
  }
  
  document.getElementById('result').innerHTML = emailControl;
});






