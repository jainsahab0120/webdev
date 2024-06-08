// why in js functions are called first class citizens or 
// what are first class function

// in js whenever you are able to asign a variable to a function
// then that function will called as first class function and this concept
//  of assighning a variable to a value function is called first class citizens


// what are higher order function 
// there are two suitutaion for Higher order function
//statement 1 when you have to function (function1 and fucntion 2) and any one of these function( function2 ) is being send 
// as an argument to the other function(function1) then function1 is called higher order function

// statement 2 when you have two function (fun1 and fun2) if one of the function(fun1 ) can return the other function(fun2) from itself 
// then fun1 is higher order function

// higher order function is the function which can take other functions as argument


// when nothing is return from the function by default undefined is return



// function a(kantara){
//     console.log("hi im inside a");
//     kantara();
    
// }
// function b(){
//     console.log("hi im inside b");
// }
// a(b);


function a(){
    console.log("hi im inside a");
    function b(){
        console.log("hi im inside b");
    }

    return b;
    
    
}

// console.log(a());
let ans = a();
console.log(ans());

// real life example

// function getBoolean (array){
//     let result = [];
//     for(let i of array ){
//         if(typeof(i) == 'boolean'
//         ){
//             result.push(i);
//         }
//     }
//     return result;

// }
// function getString(array){
//     let result = [];
//     for(let i of array ){
//         if(typeof(i) == "string"
//         ){
//             result.push(i);
//         }
//     }
//     return result;

// }
// function getNumber(array){
//     let result = [];
//     for(let i of array ){
//         if(typeof(i) == "number"
//         ){
//             result.push(i);
//         }
//     }
//     return result;

// }
// let arr = ['aryan' , 'jain ' , 10 , 20 , false , true];
// console.log(getBoolean(arr));
// console.log(getNumber(arr));
// console.log(getString(arr));

// can be also done as

let arr = ['aryan' , 'jain ' , 10 , 20 , false , true];

function getBoolean(item){
    return  typeof(item ) === 'boolean';

}
function getNumber(item){
    return  typeof(item ) === "number";

}
function getString(item){
    return  typeof(item ) === 'string';

}
// for check and store

function get ( array , fn){
    let result = [];
    for(let i of array ){
        if(fn(i)){
            result.push(i);
        }
    }
    return result;
}
console.log(get(arr , getBoolean));
console.log(get(arr , getString));
console.log(get(arr , getNumber));

