let pi = Math.pi;
console.log(pi);


// let ans1 = (num) =>{return num* num};
let ans1 = num => num* num;
let ans2 = (a, b) => a +b;

console.log(ans1);
console.log(ans2);

// export behaviour show krega bcoz require dhekh liya 
// by default exports ans empty object {}

// module.exports  = {} //by default 
module.exports = {pi:hello , ans1 , ans2};  // hello se access krna padega 
// why this is not a key value pair bcz object to key value pair hota hai 


// module.export= {
//     pi:pi, // ---> same as pi
//     ans1:ans1,
//     ans2:ans2,
// }


// we can export anything 
// module.exports = 'aryan jain'
