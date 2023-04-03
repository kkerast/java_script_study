//구조분해 할당 : destructuring ( de + sturcur + ing)
// de = not
// structure = 구조
// 배열이나, 객체의 속성

//(1) 배열의 경우

let [ value1 , value2 ] = [ 1 , "new" ];

console.log(1, value1)
console.log(2, value2)

console.log("========================================")

let arr = [ "value1" ,"value2" , "value3"];
let [a, b, c] = arr;

console.log(a);
console.log(b);
console.log(c);


console.log("========================================")

let arr2 = [ "value1" ,"value2" , "value3"];
let [a2, b2, c2, d2] = arr2;

console.log(a2);
console.log(b2);
console.log(c2);
console.log(d2);


console.log("========================================")

let arr3 = [ "value1" ,"value2" , "value3"];
let arr4 = [ "value1" ,"value2" , "value3", "value4"];
// let [a3, b3, c3, d3 = 4] = arr3;
let [a3, b3, c3, d3 = 4] = arr4;

console.log(a3);
console.log(b3);
console.log(c3);
console.log(d3);


console.log("========================================")
//(2) 객체인 경우
let user = {
    name : "nbc",
    age : 30
}

// let {name, age} = {name : "nbc", age : 30,};
// console.log("name =>",name); //string
// console.log("age =>",age); //number


//새로운 이름으로 할당

// let { name : newName, age : newAge} = user;
// console.log("newName =>",newName); //string
// console.log("newAge =>",newAge); //number


let { name , age, birthday = "today"} = user;
console.log(name); //string
console.log(age); //number
console.log(birthday); //number


