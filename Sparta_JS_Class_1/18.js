//while
let i = 0;

// while (조건){
//     //main logic
//     //증감
// }
console.log("===========================================")


while (i<10){
    
    console.log(i);
    i++;
    //main logic
    //증감
}

console.log("===========================================")
 
i = 3
while (i<100){
    
    if (i % 5 === 0 && i>=5){
        console.log(i+ "는 5의 배수");
    }
    
    i++;

}

//do ~ while
console.log("===========================================")
i = 0
do{
    
    console.log(i);
    i++;

} while(i<10)

console.log("===========================================")
//break
for ( let i = 0; i< 10; i++){
    if (i ===5){
        break;
        

    }
    console.log(i)
}

console.log("===========================================")
//continue

for ( let i = 0; i< 10; i++){
    if (i ===5){
        continue;
        

    }
    console.log(i)
}