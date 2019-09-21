const listItemTemplate = `
	<li>
        <input type="checkbox" class="checkBox">    
        <span class="newTaskName"></span>
        <input type="date" class="newTaskDate">
        <input type="button" class="editButton" value="Edit">
        <input type="button" class="deleteButton" value="Delete">
    </li>
`;

let tasks = [];

function addTask(newTaskName, newTaskDate) {
    //Update task array
    tasks.push({
        name: newTaskName,
        dueDate: newTaskDate,
        //isDone: false
    });
}

//Create a new list when "Add" button clicked
function addList() {
    let inputValue = $("#myNewToDoListText").val();
    let inputDate = $("#myNewToDoListDate").val();

    if (inputValue !== '') {
        let liText = listItemTemplate;
        // liText = liText.replace(inputValue); 
        // liText = liText.replace(inputDate); 
        $("#myList").append(liText);
        $('#myList > li:last-child > span').text(inputValue);
        $('#myList > li:last-child > input [type=date]').attr(inputDate);
        addTask(inputValue, inputDate);
    }
}
//Edit an existing list when "Edit" button clicked
$('.editButton').click(function () {
    $('li').prop('contenteditable', 'true');
})

//Delete an existing list when "Delete" button clicked
$(document).on('click', '.deleteButton', function() {
    $(this).parent().remove();
    //update the array
})