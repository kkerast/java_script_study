const myMap = new Map();

myMap.set('one',1);
myMap.set('two',2);
myMap.set('three',3);

//console.log(myMap.keys());
for ( const key of myMap.keys()){
    console.log(key);
}

console.log("============================")

for ( const value of myMap.values()){
    console.log(value);
}

console.log("============================")

for ( const entry of my.entries()){
    console.log(entry);
}

console.log("============================")

console.log(myMap.size);

console.log(myMap.has('two'));
console.log(myMap.has('four'));
