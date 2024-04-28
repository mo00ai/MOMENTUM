

/*


//const loginForm = document.querySelector("#login-form");
const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");


//const loginInput = document.querySelector("#login-form input");
//const loginButton = document.querySelector("#login-form button");


function onLoginBtnClick() {
    //console.dir(loginInput.value);
    const username = loginInput.value;

    if (username === "") {
        alert("plz write your name");
    } else if(username.length > 15) {
        alert("Your name is too long.")
    }

}

loginButton.addEventListener("click", onLoginBtnClick);


*/


/*
function handleLinkClick(event) {
    event.preventDefault();
    console.log(event);
    //alert("clicked");
}

link.addEventListener("click", handleLinkClick)
*/





const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
//const link = document.querySelector("a");

const HIDDEN_CLASSNAME="hidden";
const USERNAME_KEY = "username";

function onLoginsubmit(event) {
    event.preventDefault();
    //브라우저의 기본동작을 막아줌
    //브라우저가 submit시 자동으로 새로고침하는 걸 막고 있음
    
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    //greeting.innerText = "Hello " + username;

    localStorage.setItem(USERNAME_KEY, username);

    paintGreetings(username);

}



function paintGreetings(username) {
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    loginForm.classList.add(HIDDEN_CLASSNAME);
}



const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null) {
    //show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginsubmit);

} else {
    //show the greetings
    paintGreetings(savedUsername);

}







