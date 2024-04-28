
/*
const playerName="nico";
const playerPoints="121212";
const playerHansome="false";
const playerFat="little bit";

//player.name
//player.points
//player.handsome

//player[0] == name 이런 식으로 따로 주석 설며앻야함
const player = ["nico", 1212, false,"littlebit"];

*/

const player = {
    name: "nico",
    points: 10,
    fat:true
};

console.log(player);
console.log(player.name);
console.log(player["name"]);

//object 수정update
console.log(player.fat);
player.fat=false;
console.log(player.fat);

//object 속성 추가 add
player.lastName="potato";

