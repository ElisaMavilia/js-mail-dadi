/* Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
Prima di partire a scrivere codice poniamoci qualche domanda:
Che ci sia un array da qualche parte?
Se dobbiamo confrontare qualcosa che "cosa" ci serve? */

let button = document.querySelector (".btn");

button.addEventListener("click", function(){
    let computerNumber = [Math.floor(Math.random() * 6) + 1];
    let playerNumber = [Math.floor(Math.random() * 6) + 1];
    let availableNumber = [1, 2, 3, 4, 5, 6];
    console.log(availableNumber);
    console.log(computerNumber);
    console.log(playerNumber);
    for (i = 0; i < availableNumber.length; i++){
        let box = document.getElementById("notification");  
        if (playerNumber > computerNumber){
        notification.innerHTML="Hai vinto!";
        box.classList.remove("d-none");
        box.style.color="green";
        } else if
            (playerNumber = computerNumber){;
            notification.innerHTML="Parità!";
            box.classList.remove("d-none");
            box.style.color="green";
        } else 
            notification.innerHTML="Hai perso!";
            box.classList.remove("d-none");
            box.style.color="red";
    } 
})
    
