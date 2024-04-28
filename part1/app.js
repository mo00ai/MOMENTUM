console.log(4545);
console.log("안녕");
console.log('안녕');

console.log(5+2);
console.log(5*2);
console.log(5/2);

/*
//const: 상수, 값 변경 불가능
//const 쓰는게 default , let은 변수 업데이트가 필요할 때만
const a = 5;
const b = 2;
const myName = "nico";
const veryLongVariableName = 0;

var : 원한다면 어디서든 업데이트 , 규칙이 없음, 재선언도 가능
요새는 변수로 const, let만 사용하는 경우가 많음
*/

const a = 5;
const b = 2;
let myName = "nico";

console.log(a+b);
console.log(a*b);
console.log(a/b);
console.log("hello"+ myName);

myName = "nicolas";

console.log("안녕 나는"+myName+"이야.");


/*
변수만들때 let, const, var차이
let 재선언 금지, 재할당 가능
const 재선언 금지, 재할당 금지
var 재선언 가능, 재할당 가능

let a = b;
let a = c;
//재선언 금지

let a = b;
a = c;
//재할당은 가능

const a = b;
const a = c;
//재선언 금지

const a = b;
a = c;
//재할당 금지

var a = b;
var a = c;
a = d;
//재선언, 재할당 가능
*/


//==========================================================================================================================//


const amIFat = true; //false, null
let something; // console에 이 상태로 출력하면 undefined로 출력됨, 변수는 만들었지만 정의는 안한 것
console.log(amIFat); // console : true


/*
true
false
undefined = 변수는 선언했지만 값을 할당하지는 않음
null = 변수에 null(값이 없다)이 할당된다 즉, 정의됨
*/ 

//====================================================================================================================//

const mon = "mon";
const tue = "tue";
const wed = "wed";
const thu = "thu";
const fri = "fri";
const sat = "sat";


//const daysOfWeek = mon + tue + wed + thu + fri + sat + sun;
const daysOfWeek = [mon , tue , wed , thu , fri , sat ];

const nonsense = [1, 2, "hello", false, null, true, undefined, "nico"];


console.log(daysOfWeek);
console.log(nonsense);

//array에서 아이템 받아오기 
console.log(daysOfWeek[4]);// 0부터 시작

//Array 안에 요일 추가
daysOfWeek.push("sun");

console.log(daysOfWeek);




//===============================================================================================================================//





























