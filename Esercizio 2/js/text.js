//Creare due div; uno conterrà numeri dispari di colore rosso e l’altro conterrà numeri pari in verde. 
//Ad ogni click di un bottone chiedere all’API un numero, se è dispari metterlo nel blocco dispari, e se è pari in quello pari

$(document).ready(function(){
    $("#button").click(function(){
        $.ajax({
            url: "https://flynn.boolean.careers/exercises/api/random/int",
            success: function(risposta) {
                console.log(risposta.response);
                if(risposta.response % 2 == 0) {
                    $(".green").append("<span class='title'>" + risposta.response + "</span>");
                } else{
                    $(".red").append("<span class='title'>" + risposta.response + "</span>");
                }
            },
            error: function(error) {
                console.log(error);
            },
        })
    })
})