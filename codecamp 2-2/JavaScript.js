// output
var input=document.getElementById("nhap");
var button=document.getElementById("ADD");
var myList=document.getElementById("list");
render();
button.addEventListener('click', function () {
    var text = input.value;
    addToLocalStorage(text);
    clearMyList();
    render();
});
function render() {
    var todos=getTodosFromLocalStorage();
    for(var i=0; i<todos.length; i++)
    {
        var todo=todos[i];
        renderToDoToHTML(todo.text,todo.complete,i);
    }
    saveTodosToStorage(todos);
}

function renderToDoToHTML(text, complete ,i) {
    var todo=document.createElement("LI");
    todo.innerHTML=text+'<span class=close>X</span>';
    todo.id=i;
    todo.addEventListener('click',onClickToDo);
    if(complete)
        todo.className="complete";
    document.getElementById("list").appendChild(todo);
}
function clearMyList() {
    myList.innerHTML='';
}
// add localStorage
function addToLocalStorage(text) {
    var todos=getTodosFromLocalStorage();
    todos.push({
        text: text,
        complete: false
    });
    saveTodosToStorage(todos);
}
function getTodosFromLocalStorage() {
    var str=localStorage.getItem('todos');
    if(!str)
        return [];
    try{
        return JSON.parse(str);
    } catch (error) {
        return [];
    }
}
function saveTodosToStorage(todos) {
    var str=JSON.stringify(todos);
    return localStorage.setItem('todos' ,str);
}
// remove localStorage
function onClickToDo(event) {
    var target=event.target;
    var tag = target.tagName;
    if(tag==='LI')
    {
        tick(target);
    }
    if(tag==='SPAN') {
        remove(target);
    }
    clearMyList();
    render();
}
function remove(target) {
    var todo=target.parentElement;
    var id=todo.id;
    removeFromStorage(id);
}
function removeFromStorage(index) {
    var todos=getTodosFromLocalStorage();
    todos.splice(index,1);
    saveTodosToStorage(todos);
}
// complete
function tick(target) {
    var id=target.id;
    var todos=getTodosFromLocalStorage();
    todos[id].complete=!todos[id].complete;
    saveTodosToStorage(todos);
}