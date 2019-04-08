//My code
var list = [];
var input;


window.setTimeout(function () {
    while (input !== "quit") {
        input = prompt("What do you wanna do?")

        if (input === "list") {
            listTodos();
        }
        else if (input === "new") {
            newTodo();
        }
        else if (input === "delete") {
            deleteTodo();
        }
    }

    function listTodos() {
        console.log("================");
        list.forEach(function(color, i){
            console.log(i + ": " + color);
            
        });
        console.log("================");
    }
    function newTodo() {
        var item = prompt("Enter the new todo.")
        list.push(item);
    }
    function deleteTodo() {
        var index = prompt("Enter index of todo to delete.");
        list.splice(index, 1);
        console.log("Deleted todo index " + index);
    }
    console.log("You quit the program!")
}, 500);

//Teacher code
// var todos = ["Buy New Turtle"];

// var input = prompt("What would you like to do?");

// while (input !== "quit") {
//     if (input === "list") {
//         console.log(todos);
//     }
//     else if (input === "new") {
//         var newTodo = prompt("Enter new todo.");
//         todos.push(newTodo);
//     }

//     input = prompt("What would you like to do?");
// }
// console.log("Closed the app.")
