// ES6

//2015년도 이전 => var
// (1) es6 => let(변수) const(변수) 한번 선언하고 재할당을 할수있느냐 없느냐의 차이!
// var 선언도 다시가능
const a = 1;

// (2) arrow function
function add (){

}

var add = function () {

}

var add = () => {
    return 1;
}

var add = x => 1;

// (3) 삼항 연산자
//condition ? true인경우 : fale인경우

console.log( true ? '참' : '거짓')
console.log( false ? '참' : '거짓')
console.log(1 === 1 ? '참' : '거짓')
console.log(1 !== 1 ? '참' : '거짓')


