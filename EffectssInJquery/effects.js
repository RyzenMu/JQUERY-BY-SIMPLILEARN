$('document').ready(function() {
    $("#btn1").click(function(){
        $("#img1").hide(2000);
    });
    $("#btn2").click(function(){
        $("#img1").show(2000);
    });
    $("#btn3").click(function(){
        $("#img1").toggle(2000);
    });
    $("#btn4").click(function(){
        $("#img1").fadeIn(2000);
    });
    $("#btn5").click(function(){
        $("#img1").fadeOut(2000);
    });
    $("#btn6").click(function(){
        $("#img1").fadeToggle(2000);
    });
});