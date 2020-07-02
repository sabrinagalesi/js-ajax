// Chiedere all’API 10 nomi da inserire in un array di invitati.
// Una volta generata la lista chiedere all’utente di dire il proprio nome. 
// Se è uno degli invitati ritornare un messaggio di benvenuto, altrimenti di accesso negato.
// API https://flynn.boolean.careers/exercises/api/random/name

var listaInvitati=[];

for(x=0; x<10; x++){
    $.ajax({
        url:"https://flynn.boolean.careers/exercises/api/random/name",
        success: function(nome){
            console.log(nome);
            listaInvitati.push(nome.response);
        },
        error: function(error){
            console.log(error);
        },
    })
}

console.log(listaInvitati);


$(document).ready(function(){
    var utente = prompt("Inserisca il suo nome");
    console.log(utente);
    var trovato = false;

    for(y = 0; y < listaInvitati.length; y++){
        if(utente == listaInvitati[y]){
            trovato = true;
        } 
    }
    console.log(trovato);

    if(trovato == true){
        alert("Benvenuto al nostro party super esclusivo!");
    } else{
        alert("Vada via, pezzente! Gente come lei non è ammessa ad eventi sopraffini come questo.");
    }
})