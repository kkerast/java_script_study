//단축 속성명 : property shorthand

const name = "nbc";
const age = "30";

// key - value
// const obj = {
//     name: name,
//     age: age
// }
// key와 value 가같으면 하나로 생략가능
const obj = { name , age };
const obj1 = { name : name , age : age };

//전개 구문 = spread operator
//destructuring과 함께 가장 많이 사용되는 es6문법 중 하나!
let arr = [1,2,3];
console.log(arr);
console.log(...arr);

let newArr = [...arr,4]
let newArr1 = [1,2,3,4]
//위 둘은 같다

console.log("===============================")

//객체
let user = {
    name : "nbc",
    age : 30,

};

let user2 = { ...user };

console.log(user);
console.log(user2)

//나머지 매개변수(rest parameter)
function exampleFunc(a, b, c, ...args) {
    console.log(a,b,c);
    console.log(args);
}

exampleFunc(1,2,3,4,5,6,7);

console.log("===============================")

//템플릿 리터럴 (Template Literal) multi line 기능 지원( \n , Enter)
const testValue = "안녕하세요"
console.log(`Hello World ${testValue}`);

console.log(`
    Hello name is Javascript !!!
    
    Nice to meet you!!!
    `);



