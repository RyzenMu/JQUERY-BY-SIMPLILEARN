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

    // slide up and slide down animations
    $("#btn7").click(function(){
        $("#img1").slideUp(2000);
    });
    $("#btn8").click(function(){
        $("#img1").slideDown(2000);
    });
    $("#btn9").click(function(){
        $("#img1").slideToggle(2000);
    });
    $("#btn10").click(function(){
        $("#img1").stop();
    });

    //Animation
    // $("#btn").click(function(){
    //     $("#img1").animate({
    //         left : '300px',
    //         opacity : '1',
    //         height : '400px',
    //         width : '400px',
    //     }, 2000);
    // });
    // Animation with delay parameter as 'slow' or 'fast'
    $("#btn").click(function(){
        $("#img1").animate({
            left : '300px',
            opacity : '1',
            height : '400px',
            width : '400px',
        }, 'slow');
    });

    // animation with callback 
    $("#btnCB").click(function(){
        $("#img1").animate({
            right : '300px',
            opacity : '0.4',
            height : '250px',
            weight : '250px'
        }, 'slow', function(){
            alert("The animation is completed and back to original position")
        })
    });
    // callback with slide 
    $('#btnSlide').click(function(){
        $('#img1').slideUp(2000, function(){
            $('#img1').slideDown();
        })
    });
    // chaining
    $('#chaining').click(function(){
        $('#img1').slideUp(2000).css("opacity", '1').slideUp(2000).fadeOut(2000).fadeIn(2000).hide(2000).show(2000);
    });
});