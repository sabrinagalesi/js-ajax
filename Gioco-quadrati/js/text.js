/* (2) Griglia 6x6, ad ogni click parte una richiesta AJAX che prende un numero random da 1 a 9. Se è &lt;= 5 il quadrato diventa giallo, se è > di 5 il quadrato diventa verde. Il numero ottenuto appare al centro del quadrato
 */

 $(document).ready(function(){  
    
    $(".square").click(function(){
        var quadratoCliccato = $(this);
        if(quadratoCliccato.hasClass("clicked")) return;

        $.ajax({
            url: "https://flynn.boolean.careers/exercises/api/random/int",
            success: function(numero){
                console.log("successo", numero);
                for(var key in numero) {
                    console.log(numero[key]);
                };
                quadratoCliccato.append(numero.response);
                if(numero.response > 5) {
                    quadratoCliccato.addClass("green");
                    quadratoCliccato.addClass("clicked");
                } else if(numero.response == 5) {
                    quadratoCliccato.addClass("orange");
                    quadratoCliccato.addClass("clicked");
                } else{
                    quadratoCliccato.addClass("yellow");
                    quadratoCliccato.addClass("clicked");
                }
            },
            error: function(error){
                console.log("errore", error);
            }
        })
    })
     
 })