console.log(a);
var a = 10;

function fun(){
    var b = 100;
    console.log(a);
    console.log(b);
}

fun();
// output
//undefined
// 10 
// 100


// what is the scope of let??

// whenever a js code is run a gec is created and along with it a 
// global object is also crated 

// in our case i.e. since we are using the browser 
// the global object is *****window*****
// in case of scoping let and var are considered  to be having 
// two different scope

// #1 var  global scope or functional scope
// #2 in case of let script/local scope or block scope