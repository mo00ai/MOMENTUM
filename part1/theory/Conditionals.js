const age = prompt("How old are you?");
//prompt는 원래 있는 함수 <비추> 오래된 방법
// 사용자에게 창을 띄워 값을 받음

//변수 타입 기본값: string (숫자도 string)
console.log(typeof age);

//string > int 변환
console.log(typeof age, typeof parseInt(age));
//근데 찐 문자열(ex) asas 이런 걸 parseInt 하려고 하면 NaN이 나옴
//Not a Number
//isNAN = fasle -> 숫자다
//isNaN = true  -> 문자다

/*
const age1 = parseInt(prompt("How old are you?"));
console.log(age1);

console.log(isNaN(age));


if(isNaN(age)) {
    //condition == true
    console.log("plz write a number");

} else {
    //condition == false
    console.log("thank you for writing you age");

}
*/

const age1 = parseInt(prompt("How old are you?"));

if (isNaN(age) || age < 0) {
    console.log("plz write a real positive number");
} else if (age < 18) {
    console.log("you are too young");
} else if (age >= 18 && age <= 50) {
    console.log("you can drink");
} else if (age > 50 && age <= 80) {
    console.log("you should exercise");
} else if ( age > 80 ) { 
    console.log("you can do whatever you want.");
}








