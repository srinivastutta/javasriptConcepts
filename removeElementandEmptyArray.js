// Remove element from end

const num = [1,2,3,4,5]

console.log(num)
num.pop()
console.log(num)

// Remove element from begining

const num1 = [1,2,3,4,5]

console.log(num1)
num1.shift()
console.log(num1)

// Remove element from middle

const num2 = [1,2,3,4,5]

console.log(num2)
num2.splice(2,1)
console.log(num2)
num2.splice(2);//1,2
console.log(num2)

//empty array
//first way

let ar = [1,2,3,4,5]
console.log(ar);

ar = [];
console.log(ar);

//second way
let ar1 = [1,2,3,4,5]
console.log(ar1);

ar1.length = 0;
console.log(ar1);

//third way
let ar2 = [1,2,3,4,5]
console.log(ar2);

ar2.splice(0)
console.log(ar2);





