//factory functions : It produces objects
//Parameterization functions

function CreateCircle(radiusValue){

    const circle = {
        radius : radiusValue,
        draw(){
            console.log('Printing draw')
        }
    }

    return circle;
}

let c1 = CreateCircle(1);
console.log(c1)
c1.draw();

let c2 = CreateCircle(5);
console.log(c2)

console.log('--------------------')

//minimize above code

function CreateCircle(radiusValue){

    return {
        radiusValue,
        draw(){
            console.log('Printing draw')
        }
    }
   
}

let c3 = CreateCircle(9);
console.log(c3)
c1.draw();

