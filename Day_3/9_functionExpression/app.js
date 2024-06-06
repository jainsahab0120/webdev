// whenever we store the entire function in a variable then it is called 
// functional expression 
// first class citizens 
// first class function

function fun () {
    console.log("hi hello");
}

let yoyo = fun();

console.log(yoyo); // undefined


// javaScript is a single threaded, weakly typed , dynammmicaly typed , interpreted programming language.
// shortest code of javaSript is empty file 

// whenever a js code is run a global execution context (gec) 
// is created inside that gec  we have two phases 
// phase 1 mcp (memory creation phase) // thread = phase
//     2 cet (code execution thread)
//       which contains all the information about that script


let a = 10;
function hello(){
    console.log("hi");
}
hello();

// mcp mein variable aur function ko memory di jati hai ek bhi line 
// chalne se phele

//cep it start when mcp ends and start to execute code 
// top to bottom and left to right

// gec - environment to run all things





// mcp                                   cep 
// a : undefined  
function hello(){
    console.log("hi");
}

// whenever a function is called a new execution context is created 
// with the name of the function which also has two phases same as aabove



let k = 100;
console.log(k);
function hello(){
    let c = 10;
    console.log(c) ;

}
let b = 10;
console.log(b);
hello();


// let    var    cont

// var we  can reintilation and redeclare is possible
// let we can reintilation but no redeclare
// const both are not possible

