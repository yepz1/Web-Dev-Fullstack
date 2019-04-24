// toggle completed css class
$("ul").on("click", "li", function() {
    $(this).toggleClass("completed");
});
// trashcan logic
$("ul").on("click", "span", function(event) {
    $(this).parent().fadeOut(500, function() {
        $(this).remove();
    });
    event.stopPropagation();
});
// create todos
$("input[type='text']").keypress(function(event) {
    if(event.which == 13) {
        // get input text for new todo
        var todoText = $(this).val();
        // clears input
        $(this).val("");
        // create new todo on the ul
        $("ul").append("<li><span><i class='far fa-trash-alt'></i></span> " + todoText + "</li>")
    }
})
// toggle input
$("#icon").on("click", function() {
    $("input[type='text']").fadeToggle();
})
