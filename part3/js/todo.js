const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
//const toDoInput = document.querySelector("#todo-form");
const toDoList = document.getElementById("todo-list");



function deleteToDo(event) {
    //event.target // 이벤트가 일어나는 대상을 알려줌
    //console.dir(event.target);
    //target은 클릭된 html element
    //클릭된 html 요소엔 하나 이상의 parentElement가 있음
    //console.dir(event.target.parentElement.innerText);

    const li = event.target.parentElement;
    li.remove();

}


function paintToDo(newTodo) { 

    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");

    button.innerText = "X";
    button.addEventListener("click", deleteToDo);

    li.appendChild(span); //li는 span을 자식으로 추가함
    li.appendChild(button);
    
    span.innerText = newTodo;

    toDoList.appendChild(li);
}



function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value; 
    //기존 text value 저장소
    toDoInput.value = "";
    //새로운 text value를 받기 위해
    //text input 다시 공백으로 만들기(입력할 수 있게)
    paintToDo(newTodo); // newTodo는 string
}

toDoForm.addEventListener("submit", handleToDoSubmit);
