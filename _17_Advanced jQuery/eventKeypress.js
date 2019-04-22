$("input").keypress(function(event){
    if (event.which === 32) {
        console.log("You pressed space");
    }
    else {
        console.log(event)
    }
});
