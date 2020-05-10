//Enumeraing properties from Object:
//get all properties form object:

const circle = {
    radius : 1,
    speed : '25 km',
    draw(){
        console.log('draw')
    }
}


console.log(circle.radius)

//1. for - in loop

for (let key in circle){
    console.log(key, circle[key])
}


console.log('----------------')

//2. for - of loop
// for - of loop only use for arrays and maps, not for objects
//Object.keys will convert string into array
//exp 1

for (let key of Object.keys(circle)){
    console.log(key, circle[key])
}

console.log('----------------')

//exp 2 
for (let entry of Object.entries(circle)){
    console.log(entry)
}

console.log('----------------')

//3. in operator
// check property in object

if ('radius' in circle){
    console.log('Property is available')
}
