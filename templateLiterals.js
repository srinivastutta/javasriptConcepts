// ES6: Template literals ---> back tick chars ---> ``

const Message = `Hi Tom,

Good Day!!!

Hope you doing well!!!  I want to add you in our group

You hava great day!!!

Regards,
Srinivas`

//console.log(Message)

// template with functions and parameters

//function
let product = function(){
    return 'Window'
}

let name = 'Srinivas';

const Message1 = `Hi ${name} ${1 + 1},

Good Day!!!

Hope you doing well!!!  I want to add ${product()} you in our group

You hava great day!!!

Regards,
Srinivas`

console.log(Message1)
