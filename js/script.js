/* Mail
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo. 

Consigli del giorno:
1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
2. javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
3. si ma noi cosa vogliamo fare?
4. torniamo a scrivere in italiano
5. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"

*/

let button = document.querySelector(".btn");

button.addEventListener("click", function(){
    let email =[
        "elisamavilia1@gmail.com",
        "elisamavi22@hotmail.com", 
        "nimafasa@gmail.it", 
        "nima@hotmail.com", 
        "roberto@gmail.it", 
        "carla@hotmail.com",
        "simona@gmail.com",
        "enza@hotmail.it",
        "lara@gmail.se",
        "sanna@gmail.com"
        ];

let userEmail = document.getElementById("userValue").value;
  let access = false;
    for (let i = 0; i < email.length; i++){
        if(userEmail.toLowerCase() === email[i].toLowerCase()){
            access = true;
        };
    }
let box = document.getElementById("notification");  
   if (access) {
    notification.innerHTML="Benvenuto!";
    box.classList.remove("d-none");
    box.style.color="green";
   } else {
    notification.innerHTML="Accesso negato!";
    box.classList.remove("d-none");
    box.style.color="red";
   }

})
    


