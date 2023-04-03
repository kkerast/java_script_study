//배열

//1. 생성
// 1-1. 기본 생성
let fruits = ["사과", "바나나", "오렌지"];
//              0       1          2

// 1-2. 크기 지정
let number = new Array(5);

console.log(fruits)
console.log(number)

// 2. 요소 접근

console.log(fruits[0])
console.log(fruits[1])
console.log(fruits[2])


// 3.배열의 메소드
//3-1. push
let fruits2 = ["사과", "바나나"];
console.log("1 ==> ", fruits2)

fruits2.push("오렌지")
console.log("2 ==> ", fruits2)

//3-2. pop 마지막 요소 삭제
let fruits3 = ["사과", "바나나"];
console.log("3 ==> ", fruits3)

fruits3.pop()
console.log("4 ==> ", fruits3)

//3-3. shift 맨처음 요소 삭제
let fruits4 = ["사과", "바나나", "키위"];
console.log("5 ==> ", fruits4)

fruits4.shift()
console.log("6 ==> ", fruits4)

//3-4. shift 맨처음 요소에 추가
let fruits5 = ["사과", "바나나", "키위"];
console.log("7 ==> ", fruits5)

fruits5.unshift("포도")
console.log("8 ==> ", fruits5)

//3-5. splice (시작위치 , 몇개 삭제할지 , 넣을 데이터 )
let fruits6 = ["사과", "바나나", "키위"];
console.log("9 ==> ", fruits6)

fruits6.splice(1, 1, "포도")
console.log("10 ==> ", fruits6)

//3-5. slice (시작위치, 마지막위치 + 1 )
let fruits7 = ["사과", "바나나", "키위"];
console.log("11 ==> ", fruits7)
let slicedFruits = fruits7.slice(1,2)
console.log("12 ==> ", slicedFruits)