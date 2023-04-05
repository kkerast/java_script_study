//for, while -> ~동안 : 반복문

// for (초기값; 조건식; 증감식){

// }

//i라는 변수는 0부터 시작할거야!
//i라는 변수가 10에 도달하기 전까지 계속할거야!
//i라는 변수는 한 사이클이 돌고 나면 1을 더할거야!
for ( let i = 0; i< 10; i++){
    console.log("for문 돌아가고있음 => " + i);
}

console.log("===========================================")

// 배열과 for문은 짝꿍이다.
const arr = ["one","two","three","four","five"];
for (let i =0; i<arr.length;i++){
    console.log(i);
    console.log(arr[i]);
}

console.log("===========================================")

//ex : 0 부터 10까지의 수중에서 2의 배수만 cosole.log로 출력
for (let i = 0; i<=10 ;i++){
    
    if (i >=2)
        i%2 ? '' :console.log(i+"는 2의배수입니다")
}

console.log("===========================================")

//for ~in 문
//객체의 속성을 출력하는 문법
let person = {
    name :"john",
    age :30,
    gender: "male",
};
//person['key']
for (let key in person){
    console.log(key + " : " + person[key])
}