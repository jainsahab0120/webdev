// js is 
// weekly typed 
// dynamically typed
// synchronous (execution done in order)
// single threaded (ek bari mein ek hi statement  run hogi)

// ek call stack hota hai and all task are done line by line and one by one 

// time tide and js wait for none 


console.log('start');
console.log('run after 4 secs');
console.log('end');


// setTimeout
// method to count time 
// it is present inside your browser 

// setTimeout(() => {
    
// }, timeout); // timeout in ms

setTimeout( function(){
    console.log('run after 4 secs');
}, 4000);

console.log('start');

setTimeout(()=>{
    console.log('using arrow function');

},3000);




// setInterval
let count  = 0;
setInterval(()=>{
    count+=2;
    console.log(count);
    // console.log('run every 2 secs');
}, 2000);


// 






