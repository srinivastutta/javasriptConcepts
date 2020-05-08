// for / while / do while / for ..in / for .. of

// for loop

for (let i = 0; i <= 10; i++) {
    console.log(i);
}
console.log('------------')

// while
//it will exceute based on the condition 
let i =1;

while(i <=10){
    console.log(i);
    i++;
}

console.log('------------')

// do while loop
// do - will execute once and while -- will execute based on the condition
let p = 1;

do{
    console.log(p);
    p++
}
while (p <=10);

console.log('------------')

//for .. in loop
//Create Object
const person = {
    name: 'Srinivas',
    age: 34
};
//Print Object Values through for .. in loop
for (let q in person){
    console.log(q, person[q])   
}
console.log('------------')

//Exp Array
let colors = ['red', 'green', 'blue'];

for (let index in colors){
    console.log(index, colors[index])
}
console.log('------------')
//for ..of loop
//used for especially getting vallues of array
let colours = ['Voilet', 'Black', 'Yellow'];
for (let col of colours){
    console.log(col)
}
console.log('------------')

//break and continue

let k = 1;

while (k <=10){
    console.log(k)
    k++;
    if(k === 5)
    break;
}