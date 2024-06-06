// object  - dataStructure
// collection of properties
// pair of key value 
let obj = {
    name: 'aryan',
    age: 21,
    isMarried: false
};

// by using dot operator we can access object properties
// for example math object ki floor random max properties thi 

console.log(obj['name']);

// memory mein key by default String mein store hoti hai
// object are pass by Reference

let obj1 = obj;
obj1.age = 22;
console.log(obj); 
//{
//     "name": "aryan",
//     "age": 22,
//     "isMarried": false
// }

// Method vs function

// function is a block of code which can be called multiple times
// and method is a function which is defined inside an Object

let obj2 = {
    name: 'aryan',
    age: 21,
    isMarried: false,
    greet: function(){
        console.log('hello');
    }
};

obj2.greet();



