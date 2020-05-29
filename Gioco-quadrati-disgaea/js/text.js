$(document).ready(function(){
       $(".square").click(function(){
        var quadratoCliccato = $(this);
        if(quadratoCliccato.hasClass("clicked")) return;
        $.ajax({
            url: "https://flynn.boolean.careers/exercises/api/random/int",
           success: function(numero){
               console.log("successo", numero);
               for(var key in numero){
                   console.log(numero[key]);
               };
                if(numero.response > 5) {
                   quadratoCliccato.append('<img id="killia" src="https://cdn02.nintendo-europe.com/media/images/06_screenshots/games_5/nintendo_switch_6/nswitch_disgaea5complete/NSwitch_Disgaea5Complete_02.png"/>');
                   quadratoCliccato.addClass("clicked");
               } else if (numero.response == 5) {
                   quadratoCliccato.append('<img id="prinny" src="https://www.akibagamers.it/wp-content/uploads/2020/03/prinny-1620x800.jpg"/>');
                   quadratoCliccato.addClass("clicked");
               } else{
                   quadratoCliccato.append("<img id='seraphina' src='https://www.ilvideogioco.com/wp-content/uploads/2015/08/Disgaea-5-Alliance-of-Vengeance-Seraphina-1024x576.jpg'/>");
                   quadratoCliccato.addClass("clicked");
               }
           },
           error: function(){
               console.log("errore", errore);
           },
        })
    })
    
})