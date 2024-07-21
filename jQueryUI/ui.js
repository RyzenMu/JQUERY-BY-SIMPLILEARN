// $( function() {
//     $( "#datepicker" ).datepicker();
//   } );

$('document').ready(function(){

    // Accordion
    $('.divA1').accordion({
        collapsible : true,
        icons : {
            header: "ui-icon-folder-open",
            activeHeader : " ui-icon-unlocked",
        },
        animate : 1000,
        event : "mouseover",
    });
    // date picker
    $('#date').datepicker({
        showOtherMonths: true,
        selectOtherMonths: true,
        showButtonPanel: true,
        changeMonth: true,
        changeYear: true,
        minDate: new Date(1986, 4, 28),
        maxDate: new Date(2024, 7, 21),
        numberOfMonths : 2,
    });

    // tool tip
    $('#tool').tooltip({
        track : true,
        content : "This is the place for Name",
        show : {
            effect: "pulsate",
            duration: 2000,
            delay: 250,
        },
        hide : {
            effect : "explode",
            duration : 2000,
        }
    })
});