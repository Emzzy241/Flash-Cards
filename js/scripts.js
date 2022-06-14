$(document).ready( function (){
    
    $(".click").click( function(){
        $(".var-showing").toggle(1000);
        $(".var-hidden").toggle(1000);
    });

    $(".click1").click( function(){
        $(".java-showing").toggle(1000);
        $(".java-hidden").toggle(1000);
    });

    $(".click2").click( function(){
        $(".jQuery-showing").toggle(1000);
        $(".jQuery-hidden").toggle(1000);
    });

    $(".click3").click( function(){
        $(".operators-showing").toggle(1000);
        $(".operators-hidden").toggle(1000);
    });

    $(".click4").click( function(){
        $(".function-showing").toggle(1000);
    });

});