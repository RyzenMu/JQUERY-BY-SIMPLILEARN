$('document').ready(function(){

    //dialog box
    $('#dialog').dialog({
        draggable : true,
        resizable : true,
        closeOnEscape : true,
        modal : false,
        autoOpen: true,
    });

    //datepicker
    $('#date').datepicker({
        showOtherMonths : true,
        changeMonth : true,
        changeYear : true,
    });
})