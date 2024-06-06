// math function 
// pie roundoff E min max square
let pi = Math.PI;
console.log(pi);
// 3.141592653589793
 

console.log(Math.round(pi)); //3

console.log(Math.min(12,20,10 ,20)); // 10
console.log(Math.sqrt(20)); //4.47213595499958

console.log(Math.ceil(20.22));//21
console.log(Math.floor(20.02)); // 20

//Math.random

let a  = Math.random();
console.log(a); // 0 to 1 (excluded 1)

//22 to 27

let ans = Math.random() *5 +22;
console.log(Math.floor(ans));

prompt("enter your age");
// this accept a string

// but we can use parseInt and parseFloat to convert it 

let age = parseInt(prompt("enter your age"));
console.log(typeof(age));

let age1 = parseFloat(prompt("enter your age"));
console.log(typeof(age1));

// && and || mein whi c wala logic chalta mtlb result mil gya to code age jayga nhi if ya else if mein 


