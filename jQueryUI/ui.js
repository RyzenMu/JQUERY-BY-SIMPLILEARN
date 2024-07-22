// $( function() {
//     $( "#datepicker" ).datepicker();
//   } );
let language = ["Html", "css", "Javascript", "jQuery", "python", "java", "django", "flask", "mongoDB", "mySql", "postgres", "typescript", "node"];

$('document').ready(function(){

    //Widget Modification
    $('#dialog1').dialog({
        draggable : true,
        resizable : true,
        closeOnEscape : true,
        modal : false,
        autoOpen : true,
        height : 250,
        width : 250,
    });
    $('#get').click(function(){
        let modal = $('#dialog1').dialog("option", "modal");
        alert(modal)
    });
    $('#set').click(function(){
        $('#dialog1').dialog("option", "modal", true);
    });

    //Auto complete 
    $('#input').autocomplete({
        source : ["Html", "css", "Javascript", "jQuery", "python", "java", "django", "flask", "mongoDB", "mySql", "postgres", "typescript", "node"],
    }, {
        delay : 50,
        minLength : 0, 
        autoFocus : true,
    });

    // Message box or Dialog box
    $('#dialog').dialog({
        title : "Title using property",
        draggable: false,
        resizable : false,
        closeOnEscape : false,
        modal : true,
        autoOpen : false,
    });

    $('#buttonDialog').click(function(){
        $('#dialog').dialog("open");
    });

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