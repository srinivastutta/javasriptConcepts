//Arithmetic
//assignment
//Ternary
//Comparasion
//logical
//bit wise

//Arithmatic

// let x=10;
// let y=5;
// console.log(x + y);
// console.log(x * y);
// console.log(x - y);
// console.log(x / y);

// //assignment
// let x= 10
// let c = x+10;
// console.log(x+c);

//comparison
// let x = 10;
// console.log(x >10);
// //strict equality -- type and value
// console.log(10 === 10); //true
// console.log('10' === 10); //false
// //lose equality -- check value only
// console.log('10' == 10); //true


//ternary
// let points = 110;
// let type = points > 100 ? 'Gold' : 'Silver';

// console.log(type);

// let points1 = 90;
// let type1 = points1 > 100 ? 'Gold' : 'Silver';

// console.log(type1);

//logical
// AND (&&): when both conditions are true (satisfied) then it will return true
// let highIncome = true;
// let goodCreditScore = true;
// let eligibleforLoan = highIncome && goodCreditScore;

// console.log(eligibleforLoan);

// OR ( ||): if either of one condition is satisifed then it will return true
// true || true //true
// true || false //true
// false || true //true
// true || false //false

// //NOT (!)
// let isActive = true;
// console.log(isActive); //true
// console.log(!isActive); //false

// console.log(10>5); //true
// console.log(!(10>5)); //false

//logical operators with non boolean
//falsy (false);
//undefined
//null
//0
//false
//''
//NaN

//Real Time Example
// let userColor = 'Red';
// let defaultColor = 'blue';
// let currentColor = userColor || defaultColor;

// console.log(currentColor); //Red

let userColor = undefined;
let defaultColor = 'blue';
let currentColor = userColor || defaultColor;

console.log(currentColor);//Blue


