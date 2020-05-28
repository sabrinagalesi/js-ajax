/* (2) Griglia 6x6, ad ogni click parte una richiesta AJAX che prende un numero random da 1 a 9. Se è &lt;= 5 il quadrato diventa giallo, se è > di 5 il quadrato diventa verde. Il numero ottenuto appare al centro del quadrato
 */

 $(document).ready(function(){
     $(".square").each(function(){
        $(this).click(function(){
            $.ajax({
                url: "https://flynn.boolean.careers/exercises/api/random/int",
               success: function(numero){
                   console.log("successo", numero);
                   for(var key in numero){
                       console.log(numero[key]);
                   };    
               },
               error: function(){
                   console.log("errore", errore);
               },
            })
     })
     })
 })