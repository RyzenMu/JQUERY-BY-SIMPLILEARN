$('document').ready(function(){

    // html and text
    $(".div1").click(function(){
        let x = $(".p1").html();
        $("#span1").text(x);
    });
    $(".div1").click(function(){
        alert($(".p1").text());
    });

    //attributes
    $('#btn1').click(function(){
        $(".p1").attr("id", "p2id");
    })
    $(".div1").click(function(){
        alert($(".div1").attr("style"));
        alert($(".p1").attr("id"));
    });

    // css properties
    $('#btn1').click(function(){
        $('.div1').css("background-color", "red");
    });
    $('.div1').click(function(){
        const x = $('.div1').css("background-color");
        $('#span2').text(x);
    });

    // append and prepend
    $('#btn1').click(function(){
        $('.div1').append('<p>This is append</p>');
        $('.div1').prepend('<p>This is prepend</p>');
        $('h2').append('<p>This is append</p>');
        $('h2').prepend('<p>This is prepend</p>');
        $('.div1').append('<img src="../images/JQ.png.png" alt="jQuery" id="img1" width="250">');

    })

    // before and after
    $('#before').click(function(){
        $('.div1').before('<h1>Before</h1>');
    });
    $('#after').click(function(){
        $('.div1').after('<h1>this is after </h1>');
    });

    // remove and empty
    $('#remove').click(function(){
        $('.div1').remove();
    });
    $('#empty').click(function(){
        $('.div1').empty();
    });
});