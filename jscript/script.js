/* ESERCIZIO 1 - Gioco dei dadi
1. Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
2. Stabilire il vincitore, in base a chi fa il punteggio più alto.
3. Stampiamo in pagina i due tiri e il risultato
 */

//SET UP PHASE
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
//


