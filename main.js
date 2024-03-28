class InputBar{
	constructor(){
		window.addEventListener('load',()=>{
			this.form=document.querySelector("#new-task-form");
			this.input=document.querySelector("new-task-input");
			this.listElement=document.querySelector("#tasks");
			this.form.addEventListener('submit',(e)=>{
				e.preventDefault();
				this.addTask();
			})
		})
}
addTask(){
	const task=this.input.value;
	const taskList=document.createElement('div');
	taskList.classList.add('task');
	const taskContentELement=document.createElement('div');
	taskContentELement.classList.add('content');
	taskContentELement.appendChild(taskContentELement);

}
	
}