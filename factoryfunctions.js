//factory functions : It produces objects
//Parameterization functions
//Name: camel Case : oneTwoThree

function createCircle(radiusValue){

    const circle = {
        radius : radiusValue,
        draw(){
            console.log('Printing draw')
        }
    }

    return circle;
}

let c1 = createCircle(1);
console.log(c1)
c1.draw();

let c2 = createCircle(5);
console.log(c2)

console.log('--------------------')

//minimize above code

function createCircle(radiusValue){

    return {
        radiusValue,
        draw(){
            console.log('Printing draw')
        }
    }
   
}

let c3 = createCircle(9);
console.log(c3)
c1.draw();

console.log('--------------------')

//Construction Function     :  Also used to create objects
//Name: pascal notation : OneTwoThree

function Circle (radiusVal){
    this.radius = radiusVal;
    this.isVisible = true;
    this.draw = function(){
        console.log('print draw');
    }
}
//how to call Constructor function:  Use new Keywowrd

let a = new Circle(7);
console.log(a)
a.draw();