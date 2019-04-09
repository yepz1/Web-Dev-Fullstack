var btn = document.querySelector("button")
var p = document.querySelector("button + p")
var lis = document.getElementsByTagName("li")

for (var i = 0; i < lis.length; i++) {
    lis[i].addEventListener("click", function() {
        this.style.color = "pink"
    })
}

btn.addEventListener("click", function() {
    if (p.textContent == "No one clicked the button") {
        p.textContent = "SOMEONE CLICKED THE BUTTON!";
    }
    else {
        p.textContent = "No one clicked the button";
    }
})
