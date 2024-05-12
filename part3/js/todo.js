/*

js 메소드
.forEach
.filter
JSON.stringify
JSON.parse

*/ 





const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
//const toDoInput = document.querySelector("#todo-form");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

const toDos = [];

function saveToDos() {
    //toDos array의 내용을 localStorage에 넣기
    //localStorage는 기본적으로 저장값들을 string으로 저장함
    //-> 배열로 저장하고 싶음(그게 더 편리하니까)
    // ------> JSON 사용!!!!!!!!!!!!
    // String -> array , array -> String
    localStorage.setItem("todos", JSON.stringify(toDos));// '["a","b","c"]'
    //localStorage.setItem("todos", toDos);


    /*
    JSON.stringify();
    js object나 array 또는 어떤 js 코드건 간에 string으로 만들어줌

    1. JSON.stringify – 객체를 JSON으로 바꿔줍니다.
    => 객체를 문자열로 바꿔주어요

    2. JSON.parse – JSON을 객체로 바꿔줍니다.
    => JSON으로 인코딩된 객체(문자열로 바뀐 객체)를 다시 객체로 바꾸어줍니다.(디코딩)
    위에선 stringify로 단순 string이었던 문자를 js object array 로 변환시켜줌

    */

}


function deleteToDo(event) {
    //event.target // 이벤트가 일어나는 대상을 알려줌
    //console.dir(event.target);
    //target은 클릭된 html element
    //클릭된 html 요소엔 하나 이상의 parentElement가 있음
    //console.dir(event.target.parentElement.innerText);

    const li = event.target.parentElement;
    li.remove();

    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();

}


function paintToDo(newTodo) { 

    const li = document.createElement("li");

    li.id = newTodo.id;

    const span = document.createElement("span");
    
    span.innerText = newTodo.text;
    
    const button = document.createElement("button");

    button.innerText = "X";
    button.addEventListener("click", deleteToDo);

    li.appendChild(span); //li는 span을 자식으로 추가함
    li.appendChild(button);

    toDoList.appendChild(li);
}



function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value; 
    //기존 text value 저장소
    toDoInput.value = "";
    //새로운 text value를 받기 위해
    //text input 다시 공백으로 만들기(입력할 수 있게)

    const newTodoObj = {
        text: newTodo,
        id: Date.now()
    }

    toDos.push(newTodoObj);
    paintToDo(newTodoObj); // newTodo는 string
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);




function sayHello(item) {
    console.log("this is the turn of ", item);
}


const savedToDos = localStorage.getItem(TODOS_KEY);

//saved todos value is exist
if(savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);

//    toDos = parsedToDos;

    /*
    parsedToDos.array.forEach(element => {
        
    });
    */
    //each array 꺼내기
    //parsedToDos.forEach(sayHello());
    //parsedToDos.forEach((item) => console.log("this is the turn of ", item));

    parsedToDos.forEach(paintToDo);


} 





function sexyFilter(item) {
    return item !== 3;
}

[1,2,3,4].filter(sexyFilter)
// 함수 sexyFilter의 매개변수에 배열 내 모든 값을 인자값으로 한 번씩 전함
// ex) sexyFilter(1), sexyFilter(2) ... sexyFilter(4)
//모든 숫자가 배열에 포함되고 싶으면 함수 sexyFilter는 반드시 모두 true를 리턴해야 됨
//하지만 특정 값을 배열에서 제외하고 싶다면 그 값의 함수 sexyFilter는 false를 리턴해야 됨