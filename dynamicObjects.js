//dyanamic nature of the objects in javascript

const circle = {
    radius : 1,
    speed : "30mk",
    log(){
        console.log('log', this.radius);
    }

}

console.log(circle);

//add more properties in circle object
circle.rank = 1;
circle.isPresent = true;


console.log(circle);

// delete properties in circle object
delete circle.rank;

console.log(circle);

circle.log();