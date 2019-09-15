//Create a new list when "Add" button clicked
function addList() {
    let list = document.createElement("li");
    let inputValue = document.getElementById("myText").value;
    let text = document.createTextNode(inputValue);
    list.appendChild(text);
    if (inputValue === '') {
        alert("Type something before adding a list!");
    } else {
        document.getElementById("myList").appendChild(list);
    }
    document.getElementById("myText").value = "";
}

//Edit an existing list when "Edit" button clicked
let li = [];
let i = li;
let list1 = document.querySelector("ul");
let editList = document.getElementById("#editButton[i]");
for (i=0;i<li.length;i++) {
    editList.onclick = function() {
        list1.contentEditable = true;
    }
}

//Delete an existing list when "Delete" button clicked