//객체
//key - value pair
//하나의 변수에 여러개의 값을 넣을 수 있다.!!
//1. 객체 생성 방법
//1-1. 기본적인 객체 생성 방법
let person = {
    name : "홍길동",
    age : 30,
    gender:"남자",

}

//1-2. 생성자 함수를 이용한 객체 생성 방법
function Person(name, age, gender){
    this.name = name;
    this.age = age;
    this.gendr = gender;
}

let personl = new Person("홍길동", 30, "남자");
let person2 = new Person("홍길순", 20, "여자");

//2. 접근하는 방법
console.log("1" , person.name);
console.log("2" , person.age);
console.log("3" ,person.gender);

//3.객체 메소드 (객체가 가진 여러가지 기능 : Object.~~~)

//3-1. Object.keys() : Object의 키를 가져오는 메소드

let keys = Object.keys(person);
console.log("keys => ",keys);

//3-2. Object.values() : Object의  value를 가져오는 함수
let values = Object.values(person);
console.log("values => ",values);

//3-3. entries
//Object.values() : key와 value를 묶어서 배열로 만든 배열 !!(2차원 배열)
let entries = Object.entries(person);
console.log("entries => ",entries);

//3-4. assign
//객체 복사
let newPerson = {};
Object.assign( newPerson , person );
console.log("newPerson => ",newPerson);
//복사와 함께 수정
let newPerson2 = {};
Object.assign( newPerson2 , person ,{"gender" :"여자"});
console.log("newPerson => ",newPerson2);

//3-5. 객체 비교
let person1 = {
    name : "홍길동",
    age : 30,
    gender:"남자",

}

//값의 주소를 저장
let person3 = {
    name : "홍길동",
    age : 30,
    gender:"남자",

}

//값을 직접저장
let str3 = "aaa";
let str4 = "aaa";

console.log("answer = > ", person1 === person3)
console.log("answer = > ", str3 === str4)

//stringify 주소값->문자열로 전환
console.log(JSON.stringify(person1) === JSON.stringify(person3));

//3-6. 객체 병합
let person_1 ={
    name : "홍길동",
    age : 30

};
let person_2 ={
    gender:"남자"

};

//... : spread operator
// console.log("person_1 =>", person_1);

// let person_1_copy = { ...person_1 }; // Use the spread operator to create a shallow copy of person_1
// console.log("person_1_copy =>", person_1_copy);


//console.log("person_1 =>" , person_1);
//console.log(...person_1);
//console.log("person_2 => " , person_2);
//console.log("...person_2 => " , ...person_2);
let perfectMan = {...person_1 , ...person_2};
console.log(perfectMan)