// introduction

function func1(){
    $("#img1").fadeToggle(3000);
}

// selectors
function func2(){
    //$(element name).action();
    $('div').css("background-color", "orange");
    $('.para').css("font-style", "italic");
    // select multiple ids 
    $('#div1, #div3').css("background-color", "green");
    $('#div1, li').css("background-color", "purple");
    // specific selector inside divs
    $("div > p").fadeToggle(); // is same as $("div p").fadeToggle();

    // to select first use psedo selectors
    $("p:first").fadeToggle(); // fades out first p

    // psedo selectors even
    $("li:even").fadeToggle();
}

