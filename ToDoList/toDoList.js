$(document).ready(function(){
    $('#button').click( function(){
        let toAdd = $('input[name=ListItem]').val();
        $('ul').append('<li>' +toAdd+'</li>');
    })
    $(document).on('dblclick','li', function(){
        $(this).toggleClass('strike').fadeout('slow');
    } );
    $('input').focus(function(){
        $(this).val(' ');
    })

    $('ul').sortable();
})