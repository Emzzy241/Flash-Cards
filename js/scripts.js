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
        $(".function-hidden").toggle(1000);
    });

    $(".click5").click( function(){
        $(".method-showing").toggle(1000);
        $(".method-hidden").toggle(1000);
    });

    $(".click6").click( function(){
        $(".argument-showing").toggle(1000);
        $(".argument-hidden").toggle(1000);
    });

    $(".click7").click( function(){
        $(".parameters-showing").toggle(1000);
        $(".parameters-hidden").toggle(1000);
    });

    $(".click8").click( function(){
        $(".chain-showing").toggle(1000);
        $(".chain-hidden").toggle(1000);
    })

});