//문(if, else if , switch ~~)

//조건문 - if else if else switch
//1. if문

//조건 : true 또는 false
//1-1
let x = 10;
조건 = x<=10
if (조건){
    //main logic
    console.log("x는 양수입니다.");
}

//1-2.
let y = "hello world";

if( y.length >=5 ){
    console.log(y.length)

}
//y의 길이가 5보다 크거나 같으면 길이를 console.log로 출력


//2. if - else문
let x2 = 10
if( x2 >0 ){
    console.log("x는 양수입니다.")

}
else{
    console.log("x는 음수입니다.")
}

//2-1. if - else if - else  뭉
let x3 = 5;
if( x3 < 0 ){
    console.log("1");

}
else if (x >= 0 && x >10){
    console.log("2");
}
else{
    console.log("3");
}

//3. switch
//변수에 값에 따라, 여러개의 경우(case) 중 하나를 선택
// default
let fruit = "사과";

switch(fruit)
{
    case "사과" :
        console.log("사과 입니다");
        break;
    case "바나나" :
        console.log("바나나 입니다");
        break;
    case "키위" :
        console.log("키위 입니다");
        break;
    default :   
        console.log("아무것도 아닙니다");
}





