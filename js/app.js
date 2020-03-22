// select elements
const clear = document.querySelector(".clear");
const dateElement = document.getElementById("date");
const list = document.getElementById("list");
const input = document.getElementById("input");

// Class names
const CHECK = "fa-check-circle";
const UNCHECK = "fa-circle";
const LINE_THROUGH = "lineThrough";

// Variables
let LIST = []
let id = 0;

// Show today's date
const options = { weekday: "long", month: "long", day: "numeric" };
const today = new Date();

dateElement.innerHTML = today.toLocaleDateString("en-US", options);

// Add to-do function
function addTodo(toDo, id, done, trash) {

    if (trash) { return; }

    const DONE = done ? CHECK : UNCHECK;
    const LINE = done ? LINE_THROUGH : "";

    const item = `
                <li class="item">
                    <i class="fas ${DONE} co" job="complete" id="${id}"></i>
                    <p class="text ${LINE}"> ${toDo} </p>
                    <i class="fa fa-trash-alt de" job="delete" id="${id}"></i>
                </li>
                `;

    // const position = "beforeend";

    list.insertAdjacentHTML("beforeend", item);

}

// Add an item to the list when user press enter key
document.addEventListener("keyup", function (event) {

    if (event.keyCode == 13) {
        const toDo = input.value;

        // if input isn't empty
        if (toDo) {
            addTodo(toDo, id, false, false);
            
            LIST.push({
                    name: toDo,
                    id: id,
                    done: false,
                    trash: false
            });
            // add item to local storage
            localStorage.setItem("TODO", JSON.stringify(LIST));
            id++;
        }
        input.value = "";
    }
});

// complete to do
function completeTodo(element) {
    element.classList.toggle(CHECK);
    element.classList.toggle(UNCHECK);
    element.parentNode.querySelector(".text").classList.toggle(LINE_THROUGH);
    // update array
    LIST[element.id].done = LIST[element.id].done ? false : true;
}

// remove to do
function removeTodo(element) {
    element.parentNode.parentNode.removeChild(element.parentNode);
    // update array
    LIST[element.id].trash = true;
}

// target the items created dynamically
list.addEventListener("click", function(event) {
    const element = event.target; // return the clicked element inside list
    const elementJob = element.attributes.job.value; // complete or delete

    if(elementJob == "complete"){
        completeTodo(element);
    } else if(elementJob == "delete") {
        removeTodo(element);
    }
    // add item to local storage
    localStorage.setItem("TODO", JSON.stringify(LIST));
});

// get item from localStorage
let data = localStorage.getItem("TODO"); 

// check if data is not empty
if(data) {
    LIST = JSON.parse(data);
    id = LIST.length;
    loadList(LIST);
} else {
    LIST = [];
    id = 0;
}

// load items to the user's interface
function loadList(array){
    array.forEach(function(item){
        addTodo(item.name, item.id, item.done, item.trash);
    });
}

// clear localStorage
clear.addEventListener('click', function(){
    localStorage.clear();
    location.reload();
});