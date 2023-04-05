function sorting (strings , n)
{
    answer = strings.map(x => x[n] + x )
    // console.log(1,answer)
    answer.sort()
    // console.log(2,answer)
    for ( let i = 0; i< answer.length ; i++)
        answer[i] = answer[i].replace(answer[i][0],"");
    // console.log(3,answer)

    return answer
}


a = ["sun", "bed", "car"]
b = ["abce", "abcd", "cdx"]


console.log( sorting(a , 1 ) )
console.log( sorting(b , 2 ) )