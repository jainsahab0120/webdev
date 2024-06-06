// Scoping
// JavaScript has the following kinds of scopes:

// Global scope: The default scope for all code running in script mode.
// Module scope: The scope for code running in module mode.
// Function scope: The scope created with a function.

// In addition, variables declared with let or const can belong to an additional scope:

// Block scope: The scope created with a pair of curly braces (a block).

// a = 10 ;
// fun() ;
// function fun(){
//     console.log(a);
//     console.log('inside the function');
// }

// console.log(a);
// output
// 10
// inside the function
// 10

//  lexical Scoping
// local memory + parent lexical Scope 

// it is defined as local memory (mcp) + parents lexical
//  scope ( which means parent's local memory + parent's lexical Scope)


// Q2

let b = 10;
function fun1(){
    var b = 100;
    function fun2(){
        console.log(b);
        function fun3(){
            console.log(b);
            
        }
        fun3();
    }fun2();
}fun1();




