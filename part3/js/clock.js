const clock = document.querySelector("h2#clock");

/*
function sayHello() {

}
*/
//setInterval(sayHello, 5000); //5초마다 호출
//setTimeout(sayHello, 5000);// 5초 기다리고 한 번만 호출

//new Date(); //현재 시각을 가져다줌

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText =`${hours}:${minutes}:${seconds}`;
}

//website가 로드 되자마자 getClock()을 실행하고 매초마다 다시 실행
getClock();
setInterval(getClock, 1000);

//숫자 1,2,3 -> 01,02,03 으로 만들기
// .padStart(2,"0"); //두 자리 숫자를 만들고 앞 공백엔 0을 붙일 것
// 뒤에다가 숫자 붙이는 .padStart(2,"0") 도 있음
//단 String에만 가능함 , Int에 padStart 사용 불가능