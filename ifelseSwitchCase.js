//if else
// when we using if condition we need define boolean condtion ()
let hour = 22;

if (hour >= 6 && hour < 12) {
    console.log('Good Morning')
}
else if (hour >= 12 && hour <= 18) {
    console.log('Good Afternoon')
}
else {
    console.log('Good Evening')
}

//Write program from maximum number
let a = 500;
let b = 700;
let c = 100;

if (a > b && a > c) console.log('a is maximum number');
else if (b > c && b > a) console.log('b is maximum number');
else console.log('c is maximum number');

//Switch -- for switch we no need pass the boolean codition, but we need pass variable

let role = 'guest';

switch (role) {
    case 'guest':
        console.log('guest user');
        break;
    case 'admin':
        console.log('admin user');
        break;
    case 'Manager':
        console.log('Manager user');
        break;
    default:
        console.log("No user matched with given value");
    break;
}
//Student marks
let marks = 60;

switch (marks) {
    case 30:
        console.log('Sturdent makrs 30');
        break;
    case 60:
        console.log('Sturdent makrs 60');
        break;
    case 80:
        console.log('Sturdent makrs 80');
        break;
    default:
        console.log("No Marks");
    break;
}