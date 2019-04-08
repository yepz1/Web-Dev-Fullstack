var num;
alert("Try to guess the number, it's an odd and perfect square number.")
num = Number(prompt("Try to guess the number."));

if(num === 25){
    alert("You guessed it right!")
}
else if(num > 25){
    alert("It's too high.")
}
else if(num < 25){
    alert("It's too low.")
}
else{
    alert("Invalid operation.")
}

if(num != 25){
    alert("Reload the page.")
}
