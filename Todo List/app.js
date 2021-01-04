//selector
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');


//event listener
todoButton.addEventListener('click',addTodo);
todoList.addEventListener('click',deleteCheck);
//functions

function addTodo(event){
    event.preventDefault();
    //todo div
    // console.log(todoInput.value.length);
    if(todoInput.value.length === 0)
    return;
    const todoDiv = document.createElement('div')
    todoDiv.classList.add('todo');
    //li
    const newTodo = document.createElement('li');
    
        newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

    //checkmark
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add('complete-btn');
    completedButton.classList.add('complete');
    todoDiv.appendChild(completedButton);
    
    //check trash
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add('complete-btn');
    trashButton.classList.add('trash');
    todoDiv.appendChild(trashButton);

    //add the item to the list
    todoList.appendChild(todoDiv);

    //clear input value
    todoInput.value = "";



    
}

function deleteCheck(e){
    const item = e.target;
    // console.log(e.target);
    if(item.classList[1] === "trash"){
        
        item.parentElement.remove();
    }
    if(item.classList[1] === "complete"){
        const parent =  item.parentElement;
        parent.classList.toggle('completed');
    }
};
