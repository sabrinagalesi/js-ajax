/* Chiedere all’utente quanti elementi vuole includere nell’array.
Generare attraverso l’API (array/integers) un array contenente N numeri compresi tra 1 e 100.
Stampare a schermo la somma dei numeri generati.

API 
https://flynn.boolean.careers/exercises/api/array/integers?min=1&max=100&items=50 */


$(document).ready(function(){
    var elementiRichiesti = parseInt(prompt("Quanti elementi vuoi includere nel tuo array?"));
    console.log(elementiRichiesti);
    $.ajax({
        url: "https://flynn.boolean.careers/exercises/api/array/integers?min=1&max=100&items=" + elementiRichiesti,
        success: function(data) {
            console.log(data.response);
            var somma = 0;
            for(var x = 0; x < data.response.length; x++){
                console.log(data.response[x]);
                somma += data.response[x];
            }
            console.log(somma);
            alert("La somma dei tuoi elementi è " + somma);
        },
        error: function(error){
            console.log(error);
        }
    })
})