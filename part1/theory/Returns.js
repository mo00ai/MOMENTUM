//console 쓰지 alert 쓰자

/*
const calculator = {
    plus: function(a,b) {
        alert(a+b);
    },
    minus: function(a,b) {
        alert(a-b);
    },
    times: function(a,b) {
        alert(a*b);
    },
    divide: function(a,b) {
        alert(a/b);
    },
    power: function(a,b) {
        alert(a**b);
    },
};
*/

/*
calculator.plus(2,3);
calculator.times(2,3);
calculator.minus(2,3);
calculator.divide(2,3);
calculator.power(2,3);
*/

console.log(calculator(2,3));


const age = 96;
function calculatoKrAge(ageOfForeigner) {
    return ageOfForeigner + 2;
};

const krAge = calculatoKrAge(age);
console.log(krAge);


const calculator = {
    plus: function(a,b) {
        return a+b;
    },
    minus: function(a,b) {
        return a-b;
    },
    times: function(a,b) {
        return a*b;
    },
    divide: function(a,b) {
        return a/b;
    },
    power: function(a,b) {
        return a**b;
    },
};

const plusResult = calculator.plus(2,3);
const minusResult = calculator.minus(plusResult,3);
const timesResult = calculator.times(10, minusResult);
const divideResult = calculator.divide(timesResult, plusResult);
const powerResult = calculator.power(divideResult, minusResult);









