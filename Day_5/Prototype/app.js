let todo = {
    title : 'buy flowers',
    desc :function(){
        return 'your task is to ${this .title';
    }
}
// console.log(todo.toString());//bcz pf prototype 
// if you try to acces the property of an object js wil firstly find it inside that object then if not found it will go to its prototype

// prototype is also an object which is used as a fallback source of properties
// dender proto
// __proto__ // underscore underscore proto underscore undersocre 
console.log(todo.__proto__);

console.log(todo.__proto__ === Object.prototype); // true
let num = Object.prototype.__proto__;
console.log(num); //null

// array is converted itself into an object behind the scene and with length property
let arr = [1,2,3];

arr.__proto__ == Array.prototype;// true
Array.prototype.__proto__ === Object.__proto__;