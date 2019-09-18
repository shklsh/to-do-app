const listItemTemplate = `
	<li>
        <input type="text" value="taskName">
        <input type="date" value="taskDate">
        <input type="button" class="deleteButton" value="Delete">
        <input type="checkbox">
    </li>
`;

let tasks = [];

function addTask(taskName, taskDate) {
    tasks.push({
        name: taskName,
        dueDate: taskDate,
    });
}

//Create a new list when "Add" button clicked
function addList() {
    let inputValue = $("#myText").val();
    let inputDate = $("#myDate").val();

    if (inputValue !== '') {
        let liText = listItemTemplate;
        liText = liText.replace("taskName", inputValue); 
        liText = liText.replace("taskDate", inputDate); 
        $("#myList").append(liText);
        addTask(inputValue, inputDate);
        console.log(tasks);
    }
}

//Delete an existing list when "Delete" button clicked
$(document).on('click', '.deleteButton', function() {
    $(this).parent().remove();
})