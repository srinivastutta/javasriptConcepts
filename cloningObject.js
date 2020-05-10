//cloning properties from object

const circle = {
    radius : 1,
    speed : '24 km',
    draw(){
        console.log('draw')
    }

}

//1. for - in loop
const another = {}
console.log(another);

for (let key in circle){
    another[key]= circle[key]; 
}

console.log(another);

console.log('------------------');

//2. using Object.assign method

const another1 = Object.assign({}, circle);

console.log(another1)

console.log('------------------');

const another2 = Object.assign({color :'red'}, circle);

console.log(another2)

console.log('------------------');



//3. using spread ... operator:
const another3 = {...circle}

console.log(another3)

