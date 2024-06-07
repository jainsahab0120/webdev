// block  swarg ka darwaja 
// let and const script / block scope
// var  global / functional scope

// block
console.log("this is aryan");
{
    console.log("hello i am block ");
}

let hulu = 10;
if(hulu >= 5){
    let ex = befawa;

}
console.log(ex); // error not defined
// block ke hatte hi uske ander ki sari chejin chali jayenge 


let x = 10;

{
    let x = 20;
    console.log(x);
}

console.log(x); // 
// 20 
// 10

var y = 10;
{
    var y = 20;
    console.log(20);
}
console.log(20);
// 20 
// 20

var z  = 100;
function fun(){
    var z = 50;
    console.log(z);
}
fun();
console.log(z);
// 50 
// 100
