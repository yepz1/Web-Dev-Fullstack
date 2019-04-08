var age;
age = prompt("Enter your age.");

if(age < 0){
    alert("Age must be a positive value.");
}

if(age === 21){
    alert("Happy 21st birthday!");
}

if(age % 2 !== 0){
    alert("Your age is odd!");
}

if(age % Math.sqrt(age) === 0){
    alert("Your age is a perfect square!");
}
