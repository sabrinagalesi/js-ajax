//Creare un calendario del 2018, inserire poi le festività 

$(document).ready(function(){
    
    var numeroMese = 1;

    function mese(numeroMese){
        var scrittaMese = moment(numeroMese, "M").format("MMMM");
        $("#month").text(scrittaMese);


        var giorniMese = moment("2018-" + numeroMese + "", "YYYY-MM").daysInMonth(); //Così ottengo il numero dei giorni di gennaio


        var dayBox = $("#template-calendar").html(); // Queste due righe servono a copiare il template dei box con dentro i giorni del mese
        var boxCompile = Handlebars.compile(dayBox); //
        var giornoSettimana = moment("2018-" + numeroMese + "-01", "YYYY-MM-DD").format("e");
        var voidBox = {
            giorno : "",
            date : "",
        }
        var voidAppend = boxCompile(voidBox);
        for(var w = 0; w < giornoSettimana; w++){
            $("#contenitor-box").append(voidAppend);
        }

        for(var y = 1; y <= giorniMese; y++){
            var meseCorrente = moment("2018-" + numeroMese + "-" + y + "").format("YYYY-MM-DD"); // Così ottengo ogni signolo giorno del mese di gennaio con relatvi giorni
            console.log(meseCorrente);
            var ogettoGiorni = { // Oggetto che contiene le cose da inserire nei box del calendario
                giorno: y,
                date : meseCorrente,
            }
            var boxAppend= boxCompile(ogettoGiorni); 
            $("#contenitor-box").append(boxAppend); // Così stampo il template con i giorni su html
        } 
        $.ajax({
            url: "https://flynn.boolean.careers/exercises/api/holidays",
            data: {
                year: 2018,
                month: numeroMese - 1
            },
            success: function(success){
                var festività = success.response; // Così ottengo i giorni festivi di gennaio
                for(var a=0; a<festività.length; a++){ //Così ottengo la data singola della festività
                    var giornoSelezionato = $(".box-day[data-date='"+ festività[a].date +"']");
                    /*$(".box-day").each(function(){
                        var box = $(this).attr("data-date");
                        console.log(box);
                        if(box == festività[a].date){ //Se il data date è uguale alla festività, allora coloro il box di rosso
                            $(this).addClass("red"); 
                        }
                    })*/
                    giornoSelezionato.addClass("red");
                }
                
            },
            error: function(error){
                console.log(error);
            }
        })
    }
    mese(numeroMese);
    

    $("#next").click(function(){
        if(numeroMese == 12){
            numeroMese = 1;
        } else {
            numeroMese++;
        }
        $(".box-day").remove();    
        mese(numeroMese);
        
    })

    $("#back").click(function(){
        if(numeroMese == 1){
            numeroMese = 12;
        } else{
            numeroMese--;
        }
        $(".box-day").remove();
        mese(numeroMese);
    })



})