/* ESERCIZIO 1 - Gioco dei dadi
1. Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
2. Stabilire il vincitore, in base a chi fa il punteggio più alto.
3. Stampiamo in pagina i due tiri e il risultato
 */

//1.
var playerOneDice = Math.floor(Math.random() * 6) + 1; //(0-5), +1, (1-6)
var playerTwoDice = Math.floor(Math.random() * 6) + 1;

console.log('playerOneDice', playerOneDice, ',', 'playerTwoDice', playerTwoDice)

//2.
var winner;

if (playerOneDice > playerTwoDice) {
  winner = "Giocatore 1";

} else if (playerOneDice < playerTwoDice) {
  winner = "Giocatore 2";
} else {
  winner = "Nessun vincitore"
}

console.log(winner)
