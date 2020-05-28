/* (1) Gioca contro il PC a chi ha il numero più grande */





$(document).ready(function(){
    var numeroUtente = parseInt(prompt("Inserisci un numero!"));   
    var chiamataAjax= [
        $.ajax({
            url: "https://flynn.boolean.careers/exercises/api/random/int",
            success: function(numeroPc) {
                for(var key in numeroPc){
                    console.log("dati dentro l'oggetto",key, numeroPc[key]);
                }
                if(numeroUtente > numeroPc.response) {
                    alert("Hai vinto! Hai digitato: " + numeroUtente + " ,contro il pc: " + numeroPc.response);
                } else if(numeroUtente == numeroPc.response){
                    alert("Pareggio! Hai digitato: " + numeroUtente + " ,contro il pc: " + numeroPc.response);
                } else{
                    alert("Hai perso! Hai digitato: " + numeroUtente + " ,contro il pc: " + numeroPc.response);
                }
            },
            error: function(errore) {
                console.log('errore del server', errore)
            }
        })
    ]
})