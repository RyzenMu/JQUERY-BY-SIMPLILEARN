//preloader
let index = 0;

const totalWorkItems = $(".work-item").length;

// preloader
$(window).on("load", function(){
    $('.preloader').addClass("loaded");
});

//nav toggle
$(".nav-toggle").click(function(){
    $(".header .nav").slideToggle();
});

$(".header .nav a").click(function(){
    if($(window).width() < 768) {
        $(".header .nav").slideToggle();
    }
});

//fixed header
$(window).scroll(function(){
    if($(this).scrollTop()>100){
        $(".header").addClass("fixed");
    }
    else{
        $(".header").removeClass("fixed");
    }
});


// smooth scroll to the section
$("a").on('click', function(){
    if(this.hash !== ""){
        event.preventDefault();
        let hash = this.hash;
        $('html, body').animate({
            scrollTop : $(hash).offset().top
        }, 800, function(){
            window.location.hash = hash;
        })
    }
});

// lightbox image max height
const wHeight = $(window).height();
$(".lightbox-img").css("max-height", wHeight+"px");

//initiate lightbox
$(".work-item-inner").click(function(){
    index = $(this).parent(".work-item").index();
    $(".lightbox").addClass("open");
    lightboxSlideShow();
});

// previous and next button in light box
$(".lightbox .prev").click(function(){
    if(index == 0){
        index = totalWorkItems - 1;
    } else {
        index--;
    }
    lightboxSlideShow();
});

$(".lightbox .next").click(function(){
    if(index == totalWorkItems-1){
        index = 0;
    } else {
        index++;
    }
    lightboxSlideShow();
})

//lightbox close
$('.lightbox-close').click(function(){
    $(".lightbox").removeClass("open");
});

$(".lightbox").click(function(event){
    if($(event.target).hasClass("lightbox")){
        $(this).removeClass("open");
    }
});

//lightbox slide show
function lightboxSlideShow(){
    const imgSrc = $(".work-item").eq(index).find("img").attr("data-large");
    const category = $("work-item").eq(index).find("h4").html();
    $('.lightbox-img').attr("src", imgSrc);
    $(".lightbox-category").html(category);
    $(".lightbox-counter").html(totalWorkItems+"/"+(index+1));
}

//dialogbox
$("#button").click(function(){
    $("#dialog").dialog({
        closeOnEscape : false,
        title : " TYhank you",
        modal : true,
        autoOpen : false,
    });
});

  