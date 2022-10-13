//função que adiciona tarefa
function addTask(){

    //titulo da tarefa
    const tasktitle = document.querySelector("#task-title").value;

    if(tasktitle) {

        //clona template         
        const template = document.querySelector(".template");

        const newTask = template.cloneNode(true);

        //adiciona o título        
        newTask.querySelector(".task-title").textContent = tasktitle                
        
        //remover classes desnecessárias
        newTask.classList.remove("template");
        newTask.classList.remove("hide");

        // adiciona tarefa na lista
        const list = document.querySelector("#task-list");

        list.appendChild(newTask);

        const removeBtn = newTask.querySelector(".remove-btn").addEventListener("click", function(){
            removeTask(this);
        })

        const doneBtn = newTask.querySelector(".done-btn").addEventListener("click", function(){
            completeTask(this);
        })

        //limpar texto
        document.querySelector("#task-title").value = "";   
    }

}

//função de rmeover tarefa
function removeTask(task){     
        task.parentNode.remove(true);    
}

//fundção de completar tarefa
function completeTask(task){
    const taskToComplete = task.parentNode;

    taskToComplete.classList.toggle("done");
}

//evento de adicionar tarefa
const addBtn = document.querySelector("#addi-btn");

addBtn.addEventListener("click", function(e){

    e.preventDefault(),


    addTask();
});