/* Creare e stampare a schermo una frase contenente N parole (N in base a quante ne vuole generare l’utente attraverso un prompt), 
grazie all’utilizzo dell’API e dell’URL random/word.

API 
https://flynn.boolean.careers/exercises/api/random/word */

function unioneFrase(frase){
    var unioneFrase= frase.join(" ");
    console.log(unioneFrase);
    alert(unioneFrase);
}



 $(document).ready(function(){
     var numeroParole = parseInt(prompt("Quante parole vuoi generare?"));
     console.log(numeroParole);
     var frase = [];
     for(var x = 0; x < numeroParole; x++){
         $.ajax({
             url: "https://flynn.boolean.careers/exercises/api/random/word",
             success: function(word){
                 frase.push(word.response);
                 if(frase.length == numeroParole){
                     unioneFrase(frase);
                 }
             },
             error: function(error){
                 console.log(error);
             },
         })
     }
 })