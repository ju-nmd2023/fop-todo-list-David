class TaskManager {
  constructor() {
    // Get the form, input field, and task list element
    this.form = document.querySelector("#new-task-form");
    this.input = document.querySelector("#new-task-input");
    this.listElement = document.querySelector("#tasks");

    // Call the addTask method when the form is submitted
    this.form.addEventListener('submit', (e) => {
      e.preventDefault();
			if(this.input.value.trim()===''){
				alert('Please enter a task');
			}
			else{
      this.addTask();
			}
    });
  }

  addTask() {
    // Get the task content from the input field
    const task = this.input.value;

    // Create a task element
    const taskElement = document.createElement('div');
    taskElement.classList.add('task');

    // Create a task content element
    const taskContentElement = document.createElement('div');
    taskContentElement.classList.add('content');
    taskContentElement.innerHTML = `<input type="text" class="text" value="${task}" readonly>`;

    // Create task action buttons element
    const taskActionsElement = document.createElement('div');
    taskActionsElement.classList.add('actions');

    // Create edit button
    const taskEditButton = document.createElement('button');
    taskEditButton.classList.add('edit');
    taskEditButton.innerText = 'Edit';

    // Create done button
    const taskDoneButton = document.createElement('button');
    taskDoneButton.classList.add('done');
    taskDoneButton.innerText = 'Done';

    // Create delete button
    const taskDeleteButton = document.createElement('button');
    taskDeleteButton.classList.add('delete');
    taskDeleteButton.innerText = 'Delete';

    // Append action buttons to task actions element
    taskActionsElement.appendChild(taskEditButton);
    taskActionsElement.appendChild(taskDoneButton);
    taskActionsElement.appendChild(taskDeleteButton);

    // Append task content and actions to task element
    taskElement.appendChild(taskContentElement);
    taskElement.appendChild(taskActionsElement);

    // Append task element to task list
    this.listElement.appendChild(taskElement);

    // Clear input field
    this.input.value = '';

    // Bind click event to edit button
    taskEditButton.addEventListener('click', () => {
      this.toggleEdit(taskEditButton, taskContentElement.querySelector('.text'));
    });

    // Bind click event to delete button
    taskDeleteButton.addEventListener('click', () => {
      this.listElement.removeChild(taskElement);
    });

      // Bind click event to done button
			taskDoneButton.addEventListener('click', () => {
				this.toggleDone(taskContentElement.querySelector('.text'));
			});
 
  }

  toggleEdit(editButton, inputField) {
    if (editButton.innerText.toLowerCase() === "edit") {
      editButton.innerText = "Save";
      inputField.removeAttribute("readonly");
      inputField.focus();
    } else {
      editButton.innerText = "Edit";
      inputField.setAttribute("readonly", "readonly");
    }
  }
	toggleDone(taskTextElement) {
    taskTextElement.style.textDecoration = 'line-through';
  }

}

// Create TaskManager instance
const taskManager = new TaskManager();