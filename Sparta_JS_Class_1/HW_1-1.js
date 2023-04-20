//01 - 문자열 연습하기
function solution(s){
    var answer = true;
    var array= [...s];
    let p_count =0;
    let y_count =0;
    console.log(array);
    array.forEach(element => {

        if (element ==='y' || element ==='Y')
            y_count += 1
        if (element ==='p' || element ==='P')
            p_count += 1
        
    });
    
    if(p_count === y_count)
        answer = true;
    else
        answer = false;
    return answer;
}