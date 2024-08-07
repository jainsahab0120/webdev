// Non destructive and districtive
// agar change parmanent reflect ho jaye to destructive else non distructive

//push

// let returnType = Arr.push("aryan");
// // push return the length of the array after pushing; 
let arr = [
    1,10,'aj' , 12.3 ,
]
arr.push(29);
console.log(arr);
  
// pop returned the popped elem
let  pop = arr.pop();
console.log(arr);
console.log(pop);

//unshift -- push from starting
arr.unshift(100);
console.log(arr);



// shift -- pop from starting index to age shift kr dega to first value pop ho jaygi
arr.shift();
console.log(arr);


// slice  - non destructive
let newarr = arr.slice(2); //2 index se age ki sari value retunr kr dega
console.log(newarr);

let newarr2 = arr.slice(2,4); //2 index se 4 index se age ki sari value retunr kr dega 4 exluded


// splice 
let newarr3 = arr.splice(3);
console.log(newarr3); 

// 3 index se 4 lenth tak return krega
let newarr4 = arr.splice(3,4);
console.log(newarr4);

//split - (nd)


let url = "https:/www.google.com/search/dog/best/color/black;";

let ans = url.split("/");
console.log(ans);
  
// join  
let ans1 = ans.join("-");
console.log(ans1);

//concat  (ND)
let a1 = [1,2,23,3,2,42,4,24,];
let a2 = ['sdsd','dasda','adad'];

let a = a1+a2;
let aa = a1.concat(a2);
console.log(a); //1,2,23,3,2,42,4,24sdsd,dasda,adad;
console.log(aa); //[1, 2, 23, 3, 2, 42, 4, 24, 'sdsd', 'dasda', 'adad']

//includes

let isinclude = a1.includes(2);
console.log(isinclude); //true
// same for string

// indexof() index bata dega

//reverse
let arrr = [ 1,2,3,4,5,6];
console.log(arrr.reverse());//[6, 5, 4, 3, 2, 1]

// change in a array will change others also







