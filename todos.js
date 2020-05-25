var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector("#app input");
var buttonElement = document.querySelector("#app button");




var todos = JSON.parse(localStorage.getItem("list_todos"))||[];
function renderTodos(){
    listElement.innerHTML = "";
    for(todo of todos){
        
        var todoElemnt = document.createElement('li');
        var todoText = document.createTextNode(todo);

        var linkElement = document.createElement('a');
        var linkText = document.createTextNode("Excluir");
        var pos = todos.indexOf(todo);

        linkElement.appendChild(linkText);

        linkElement.setAttribute('href', '#');
        linkElement.setAttribute('onclick', 'excluirTodo('+ pos+')');
        

       todoElemnt.appendChild(todoText);
       todoElemnt.appendChild(linkElement);
       listElement.appendChild(todoElemnt);
    }
}
renderTodos()


function addTodo(){
    var todoText = inputElement.value;

    todos.push(todoText);
    inputElement.value = "";
    renderTodos();
    saveToStorege();
    
    


}
buttonElement.onclick = addTodo;


function excluirTodo(pos){
    todos.splice(pos,1);
    renderTodos();
    saveToStorege();
   

}

function saveToStorege(){
    localStorage.setItem('list_todos',JSON.stringify(todos));

}
