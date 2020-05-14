const num = [3,4]

console.log(num.length);
console.log(num)

//add an element at the end of the array
num.push(5,6)
console.log(num)


//add an element before of the array
num.unshift(1,2)

console.log(num)

//add an element middle of the array
num.splice(2,0, 'a','b')

console.log(num)

//how to print all values form array
for (const key in num) {
    console.log(num[key]);

}

//find the elements in  array: (primative)
const s = [1,2,3,4,5]

//find the index of array
console.log(s.indexOf(2))//1
console.log(s.indexOf(5))//4

//verify the element from array
console.log(s.includes(2))//true


//find elements in array: Ref type
//array can have objects

const courses = [
    {id: 1, name: 'a'},//0 position
    {id: 2, name: 'b'}//1 position
]

console.log(courses.includes({id: 1, name: 'a'}))//false

const c1= courses.find(function(course){
    return course.name === 'a'; //condition is true

})

console.log(c1)//{ id: 1, name: 'a' }

console.log(c1.name)//a
console.log(c1.id)//1

//find the index of object
const c2= courses.findIndex(function(course){
    return course.name === 'b';

})

console.log(c2);//1









