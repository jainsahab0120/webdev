//folder require 
const ani = require('./animals');
// animal nam ke folder se humesha index.js ke pass hi jat hai 

 console.log(ani.dog.bark()); // call bark method of dog object
 console.log(ani.cat.meow()); // call meow method of cat object

 //destructure 

 const {cat , dog} = require('./animals');
 cat();
 dog();