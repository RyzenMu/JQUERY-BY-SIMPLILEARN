
// events in javascript
// function func1(){
//     document.getElementById('img1').style.width = "500px";
// }

// events in jQuery
$('#btn').click(func1);
function func1(){
    $('#img1').css("width", "500px");
}



// ready function
$('document').ready(function(){
    // with anonymous function
    $('#btn').dblclick( () => {
        $('#img1').css("border", "5px solid black");
    });

    // dblclick
    $('#btn').click( () => {
        $('#img1').css("border", "5px solid red");
    });

    // mouseenter
    $('#img1').mouseenter(() => {
        $('#img1').css("width", "1000px");
    });

    //mouseleave
    $('#img1').mouseleave(() => {
        $('#img1').css("width", "100px");
    });

    //hover
    $('#img1').hover(func2, func3);
    function func2(){
        $('#img1').css("border", "5px solid purple");
    }
    function func3(){
        $('#img1').css("border", "5px solid grey");
    }

});