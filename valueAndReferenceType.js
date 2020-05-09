//value types
//numbers, strings, boolean, undefined, null


let x = 10;
let y = x;
x = 20;

console.log(x); //20
console.log(y); //10
// x and y both are having two  different references  
// so numbers, strings, boolean, undefined, null will be having different references when we assigning values to different variables


//reference type
//objects, functions, arrays

let p = {value : 10}
let q = p;
p.value =20;

console.log(p.value) //20
console.log(q.value) //20

//p and q both having same refencess
//so objects, functions, arrays will be having same references when we assigning values to different variables