//задание номер 1
let result = +prompt('');
let to = typeof num;
if (isNaN(result)) {
    console.log("Упс, кажется, вы ошиблись")
} else {
    if (result%2 === 0) {
      console.log("Число четное")
    } else {
      console.log("Число нечетное")
}}



//задание номер 2
let x;
if (typeof x === "number") {
    console.log("x - число")
} else {
    if (typeof x === "string") {
        console.log("x - строка")
    } else {
        if (typeof x === "boolean") {
            console.log("x - логический тип")
        } else {
            console.log("Тип x не определён")
        }}
}



//задание номер 3
let str;
let reverse = str.split('').reverse().join('');
console.log(reverse);



//задание номер 4
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
console.log(getRandomInt(100));



//задание 5
let arr = ['Ich', 'liebe', 'dich', 'meine', 'schoneste', 'Frau'];
console.log(arr.length);
let result = arr.map(function(item, index, array) {
  return item 
});
console.log(result);
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}




//задание номер 6
let arr = [1, 1, 1, 2];
let arrEqual = true;
for (let i = 1; i < arr.length; i++) {
  if (arr[i] != arr[0]) {
    arrEqual = false;
    break;
  } 
}
console.log(arrEqual);
/*ещё один вариант решения задания:
let arr = [1, 1, 1, 2];
for (let i = 1; i < arr.length; i++) {
  if (arr[i] === arr[0]) {
    console.log('true');
  } else {
    console.log('false');
  }}
*/



//задание номер 7
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, null, 0];
let even = [];
let odd = [];
let nullNumber = [];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] == null) {
    nullNumber.push(arr[i]);
  } else {
    if (arr[i] % 2 == 0) {
    even.push(arr[i]);
  } else {
    odd.push(arr[i]);
  }
  }
}
console.log(nullNumber.length);
console.log(even.length);
console.log(odd.length);



//задание номер 8
let map = new Map([
  [10, "number"],
  ["больше", "string"],
  [5, "string"],
  ["это", "string"],
  [true, "boolean"]
]);
for (let [key, value] of map) {
  console.log(Ключ - ${key}, значение - ${value});
};






