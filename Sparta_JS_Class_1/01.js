//주석
//자바스크립트가 인식하지 않는부분

//JS엔진 -> node filename.js로 실행
//터미널에 표시

//변수, 상수
//메모리에 저장한다. 읽어들여서 재사용한다. 변수
console.log("Hello World!");

//변수 5가지 주요개념
//변수이름 : 저장된 값의 고유 이름
//변수 값 : 변수에 저장된 값
//변수 할당 : 변수에 값을 저장하는 행위
//변수선언 변수를 사용하기위해 컴퓨터에게 알리는 행위
//변수 참조 변수에 할당된 값을 읽어오는것

var myVar ="Hello Wold";
var a = 10;
var b= 20;
var c = a+ b ;

//변수를 선안 할수 있는 3가지 방법 : var, let , const

//1.var
var myVar = "Hello World1";
var myVar = "Hello World1";
myVar = "Good Bye 1"
console.log(myVar)

//2.let
let myLet = " Hello World2";
let myLet = " Hello World2";
myLet = "Good Bye 2"
console.log(myLet)

//3.const
const myConst = " Hello World3";
const myConst = " Hello World3";
myConst = "Good Bye 3"
console.log(myConst)
