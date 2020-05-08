// vars and functions should be defined in objects
//should be key :  Value format

const Circle = {
    radius : 1,
    isVisible : true,
    locaiton : {
        x : 1,
        y : 1
    },
    draw : function(){
        console.log('draw')
    }

}

console.log(Circle.radius)
console.log(Circle.isVisible)
console.log(Circle.locaiton)
console.log(Circle.draw)
console.log(Circle)

