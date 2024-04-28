const h1 = document.querySelector("div.hello:first-child h1");


//js로 css 속성 변경 방법
function handleh1Click() {
    h1.style.color = "blue";
}

function handleMouseEnter() {
    h1.innerText = "Mouse is here";
}

function handleMouseLeave() {
    h1.innerText = "Mouse is gone";
}

function handleWindowResize () {
    document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy () {
    alert("copier");
}

function handleWindowOffline () {
    alert("SOS no WIFI");
}

function handleWindowOnline () {
    alert("WIFI ON");
}


h1.addEventListener("click", handleh1Click);
h1.addEventListener("mouseenter", handleMouseEnter);
h1.addEventListener("mouseleave", handleMouseLeave);

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);


/*

이벤트를 사용하는 2가지 방법
1. .addEventListner() 함수 추가
    h1
.addEventListener("click", handleh1
Click);
2. .onclick 바로 지정
    h1
.onclick = handleh1
Click;

쌤은 1을 더 선호함.
- 이벤트를 제거하는데 더 용이




*/ 