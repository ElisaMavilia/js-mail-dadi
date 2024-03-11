/* Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
Prima di partire a scrivere codice poniamoci qualche domanda:
Che ci sia un array da qualche parte?
Se dobbiamo confrontare qualcosa che "cosa" ci serve? */


let computerNumbar = Math.floor(Math.random() * 6) + 1;
let button = document.querySelector (".btn");
let availableNumber = [1, 2, 3, 4, 5, 6];
console.log(availableNumber);
button.addEventListener("click", function(){
   
    

    let playerNumber = document.getElementById("userValue").value;
    let tmpHtml = '';
    for (i = 0; i < availableNumber.length; i++){
        
    }
})