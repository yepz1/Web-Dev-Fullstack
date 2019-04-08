var done = "yes";
var done2 = "yeah";
var are, count;
count = 0;

while (count == 0) {
    are = prompt("Are we there yet?");
    if (are == done || are == done2) {
        alert("Yaaay we are there!");
        count++;
    }
}

//Annoy-o-Matic V2
are = "";

while(are.indexOf("yes") == -1 && are.indexOf("yeah") == -1){
    var are = prompt("Are we there yet?")
}
alert("Yaaaaay we made it!")
