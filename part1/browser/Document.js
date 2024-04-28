//const title = document.getElementById("title");

console.dir(title);
//h1의 디렉토리, html 정보를 알 수 있음

title.innerText = "Got you!";

console.log(title.id);
console.log(title.className);


const hellos = document.getElementsByClassName("hello");
console.log(hellos);


//const title = document.getElementsByTagName("h1");

//query selector 사용시 첫번째 element만 가져옴
//const title = document.querySelector(".hello h1");
//query selectoall 사용시 모든 element 가져옴
const title = document.querySelectorAll(".hello h1");