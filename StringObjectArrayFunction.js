//We cannot change const values.  It is like Final keyword in Java
//primitive data types
//String
//Number
//Boolean
//Undefined
//Null

const numberOfDays = 9;

console.log(numberOfDays)

    let s1 = 'hello world';
let num = 4;
let salary = 12.33;
let flag = true;
let isActive = false;
let price;
let model = null;
let wheels = undefined;

console.log(flag)

//we can modify let type values but we cannot modify const type values
salary = 15.33;
console.log(salary)
console.log(model)

//Dynamic typing
let d = 'Srinivas';
d = 30;
console.log(d);

//Objects

let user = {
    Name: "Manvik",
    Age: 5
}
console.log(user)
//To access object properties and update
//1. dot notation:
console.log(user.Name)
//update object properties
user.Age = 10;
console.log(user.Age)
console.log(user.Name + ' ' + user.Age)

//2. using bracket notation:
user['Name'] = "Vedik";
console.log(user.Name)

//Arrays:

let languages = ['java','javascript']
console.log(languages)
console.log(languages.length)

//add value in array
languages[2] = 'ruby';
console.log(languages)
console.log(languages[0])


//functions //0 param function
function getName(){
    console.log('This is my function')

}
getName();

//param based function
function greet(name, age){
    console.log('hello ' +name+' '+age)

}
greet("Tutta", 24);

//return functions
function addition(num1, num2){
    return num1+num2;

}

let sum = addition(5,7);
console.log(sum)
console.log(addition(6,6));

//function 2
function squareRoot(number){
    let root = number * number;
    return root;

}
console.log(squareRoot(4));