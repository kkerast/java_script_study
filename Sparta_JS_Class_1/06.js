// //연산자
// //(+,-,*,/,%)

// //1. 더하기 연산자
// console.log(1+1);
// console.log(1 + "1");

// // 2. 빼기 연산자
// console.log(1 - 2); // -1
// console.log(1 - "2"); // -1

// // 3. 곱하기연산자(*)
// console.log(2 * 3);
// console.log("2" * 3);

// // 4. 나누기 연산자(/)
// console.log(4 / 2); //2
// console.log("4" / 2); //2

// // 4. 나누기 연산자(/) vs 나머지 연산자(%)
// console.log(5 / 2); //2.5
// console.log(5 % 2); //1

// 6. 할당 연산자(assignment)
// 6-1. 등호 연산자(=)
// let x = 10;
// console.log(x);

// 6-2. 더하기 등호 연산자(+=)
// x += 5;
// console.log(x);

// x += 5;
// console.log(x);

// 6-3. 빼기 등호 연산자(-=)
// x -= 5;
// console.log(x);

// x -= 20;
// console.log(x);

// 6-4. 곱하기 등호 연산자(*=)
// let a = 10;
// a*= 2;

// console.log(a);

//비교연산자 (--> true 또는 false 를 반환하는 연산자)
// 1. 일치 연산자 (===)
// 타입까지 일치해야 true 를 반환하는 연산자
// console.log(2 === 2); //true
// console.log("2" === 2); // false
// console.log(2 === "2"); // false

// //2.불일치 연산자(!==)
// // 타입까지 일치해야 flase 를 반환하는 연산자
// //숫자2가 2와 다르니? 아니!
// console.log(2 !== 2)
// console.log("2" !== 2)
// console.log(2 !== "2")

// //3. 작다 연산자 (<)
// console.log("=========")
// console.log(2 < 3); //true
// console.log(2 <= 3);//true
// console.log(3 <= 3);//true
// console.log(4 <= 3);//false

//4. 논리 연산자
//4-1(논리곱 연산자) and :    모두 true 일때 true 반환
console.log("=========")
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

//4-2(논리합 연산자) or :    둘중 하나라도 true 일때 true 반환
console.log("=========")
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

//4-3 논리 부정 연산자 not : 값을 반대로 바꿈
console.log("=========")
console.log(!true);
let a = true;
console.log (!a)

//5.  삼항 연산자 (중요 !!)
let x = 10;
let result = (x > 5) ? "크다" : "작다";
console.log("=========");
console.log(result);


console.log("=========");
//3항연산자를 이용해서 y 가 10보다 작은 경우 작다를
//console.log 로 출력해주세요.
//10 보다 크다면 크다를 출력해주세요
let y = 20;
let result_y = (y > 10) ? "크다" :"작다";
console.log(result_y);

//6.타입연산자(typeof)
console.log(typeof "5")