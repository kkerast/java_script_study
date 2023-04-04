//02 - 반복문, 조건문 연습하기
function solution(absolutes, signs) {
    var answer = 0;
    // console.log(absolutes)
    // console.log(signs)
    // console.log(absolutes.length)
    for (let i = 0; i<absolutes.length; i++)
    {
        // console.log(signs[i])
        if (signs[i])
            answer += Number(absolutes[i]);
        else
            answer -= Number(absolutes[i]);
    }

    

    return answer;
}

// [4,7,12]	[true,false,true]	9
// [1,2,3]	[false,false,true]
console.log(solution([4,7,12], [true,false,true]))


console.log(solution([1,2,3], [false,false,true]))