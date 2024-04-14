console.log("Hello my name is Nico");
console.log("Hello my name is Dal");
console.log("Hello my name is Flynn");
console.log("Hello my name is Shigatsu");
//편의성 떨어짐


function sayHello(nameOfPerson, age) {
    console.log("Hello my name is " + nameOfPerson + " and I'm " + age);
};

sayHello("nico", 10);
sayHello("dal", 20);
sayHello("lynn", 21);

function plus(firstNumber, secondNumber) {
    console.log(firstNumber + secondNumber);
}

function divide(a,b) {
    console.log(a/b);
}

plus(8,60); //undefined , a,b 없이 결과는 뜰 수 있지만 변수를 지정하는게 좋음
divide(8,60); 


const player = {
    name: "nico",
    sayHello2: function(otherPersonsName) {
        console.log("hello!" + otherPersonsName + " nice to meet you");
    },
};

console.log(player.name);
player.sayHello2("lynn");











