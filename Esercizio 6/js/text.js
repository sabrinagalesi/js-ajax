/* Creare un input che permetta all’utente di inserire un messaggio e aggiungerlo ad una conversazione (tipo whatsapp).
Dopo averlo aggiunto chiedere all’API una frase random (attraverso random/sentence) aggiungendo anch’essa al thread, 
differenziando i messaggi utente da quelli del computer.

Il tutto utilizzando handlebars

API 
https://flynn.boolean.careers/exercises/api/random/sentence */

function risposta(htmlRisposta){
    $("#main-page").append(htmlRisposta);
    $("#main-page").scrollTop($("#main-page").height());
}


$(document).ready(function(){
    var mexbox = $("#mexbox").html().trim();
    var friendbox = $("#friendbox").html().trim();
    console.log(mexbox);
    console.log(friendbox);
    
    var myCompile = Handlebars.compile(mexbox);
    var friendCompile = Handlebars.compile(friendbox);


    $("#type-message").keyup(function(e){
        if(e.keyCode === 13){
            var mioMessaggio = $("#type-message").val();
            var htmlMessaggio = myCompile({
                messaggio: mioMessaggio,
            })
            $("#main-page").append(htmlMessaggio)
            $("#type-message").val("");
            $("#main-page").scrollTop($("#main-page").height());
            $.ajax({
                url: "https://flynn.boolean.careers/exercises/api/random/sentence",
                success: function (success){
                    console.log(success.response);
                    var htmlRisposta= friendCompile({
                        risposta: success.response,
                    })
                    setTimeout(function(){
                        risposta(htmlRisposta);
                    }, 1000)
        
                },
                error: function(error){
                    console.log(error);
                },
            })
        }
    })



})