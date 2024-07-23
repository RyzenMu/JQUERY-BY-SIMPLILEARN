$('document').ready(function(){

    // draggable
    $('.box').draggable({
        // axis : "x", 
        cursor : "grabbing",
        opacity : "0.5",
        containment : "parent",
        // grid : [300, 300],
        snap : true,
        snapTolerance : 100,
    });

    // sortable
    $('.sort').sortable({
        opacity : 0.5,
        cursor : "grabbing",
        containment : "parent",
        delay : 300,
        distance : 50, 
    });

    // resizable
    $('#img1').resizable({
        animate : true,
        // containment : "parent",
        maxHeight: 400,
        maxWidth : 400, 
        minHeight : 200,
        minWidth : 200,
        ghost : true,
        aspectRatio : true, 
        aspectRatio : 16/9, 
    });
})