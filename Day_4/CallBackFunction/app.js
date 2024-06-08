// higher order ke ander call hoag tabhi callBack function hoga 
// what is a callbackfunction

// a callback function is a function that is passed as an argument to some HOF function and that passed fuction is  being called inside that HOF this calling criteria is must then only it will be known as call backfuntion 

// a callback function is a function passed into another fucntion 
// when it is then invoked inside the function

function getBoolean(item){
    return  typeof(item ) === 'boolean';

}
function getNumber(item){
    return  typeof(item ) === "number";

}
function getString(item){
    return  typeof(item ) === 'string';

}

function check(item , fn){
    return fn(item);

}
console.log(check(true , getBoolean));//true