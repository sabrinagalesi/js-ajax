//Creare un calendario del 2018, inserire poi le festività 

$(document).ready(function(){
    //var momento= moment().add(1, "day").format("YYYY-MM-DD");
    //console.log(momento);
    var giorniMese =[];
    for(var x = 1; x <= 12; x++){
        var numeroGiorni = moment("2018-" + x + "", "YYYY-MM").daysInMonth(); //Così ottengo il numero dei giorni di ogni mese dell'anno
        giorniMese.push(numeroGiorni);
    } 
    console.log(giorniMese);
    for(var y = 1; y <= giorniMese[0]; y++){
        var giorno= moment("2018-01-" + y + "").format("dddd YYYY-MM-DD"); // Così ottengo ogni signolo giorno del mese di gennaio con relatvi giorni
        console.log(giorno);
    } 
    $.ajax({
        url: "https://flynn.boolean.careers/exercises/api/holidays?year=2018&month=0",
        success: function(success){
            var festività = success.response;
            console.log(festività) // Così ottengo i giorni festivi di gennaio
        },
        error: function(error){
            console.log(error);
        }
    })
})