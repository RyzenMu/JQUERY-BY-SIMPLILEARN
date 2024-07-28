//preloader
let index = 0;

const totalWorkItems = $(".work-item").length;

$(window).on("load", function(){
    $('.preloader').addClass("loaded");
})