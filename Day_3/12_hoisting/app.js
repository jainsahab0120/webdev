console.log(a);
fun();
function fun (){
    console.log("inside mera function");}
    var a = 10;


    //output 
    //undefined
    //inside mera function


// Q2

console.log(a);
function fun(){
    console.log(a);
    console.log('inside mera function');
}

let a = 10;

// error ayega 
// cannot access a before its initialisation




// it will give error bcz of let keyword
// if var a = 0 it will give undefined

// what is hoisting 
// accessing a var or a funtion before its declaration 


// let var and const all three get hoist but by 
// different ways

//    var         ----------------      let and const 
//   undefined                    dtZ(dead temporal zone)
// 

// we cannot access let and const variable due to dtz 
// bcz it dont allow it 
// you cannot access a before its intilaztion (error)
