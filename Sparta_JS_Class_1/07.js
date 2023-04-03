//1. 함수 선언문(function declaration)
// function add(매개변수) {
//     함수내부 실행 로직
//   }
//   console.log(add(2, 3));   // 5

let add = function(x, y) {
    return x + y;
  }
  
  console.log(add(2, 3));   // 5

  //2. 함수 표현식(function expression)
  let add2 = function(x, y) {
    return x + y;
  }
  console.log(add2(2, 3));   // 5

//   let functionResult = add(3,4);
//   console.log(add2(2,3));

let functionResult = add(10,20);
  console.log(functionResult);
