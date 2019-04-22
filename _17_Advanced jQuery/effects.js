$("#fade").on("click", function(){
    $("div").fadeToggle();
});
$("#slide").on("click", function(){
    $("div").slideToggle(500, function(){
        $(this).remove();
    });
});
