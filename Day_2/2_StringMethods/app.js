// let s = 'hi this is aryan jain here';
//substr substring indexof replace replaceAll repeat

//substr avoid using this 

// let s1 = s.substr(3);//3 is the starting point

// console.log(s1);

// let s2 = s.substr(2, 5);
// // 5 is the length => mtlb kitne number chalenge

// let s3 = s.substr(-3 , 3); //piche se chalega


//substring
let s = 'hi this is aryan jain here';

let s4 = s.substring(3, 5); //here 5 is the ending point but not inlcluded

console.log(s4); //th

let s5 = s.substring(5,3); // when si > ei it swap mtlb 5, 3 ==> 3 , 5

//whenever we encounter  -ve value they are allogted to 0 
let s6 = s.substring(-3, 3); // (0,3)

let s7 = s.substring(3, -3); // (3,0) //empty

console.log(s6);


//indexOF

let ss = 'hi this is aryan jain here ';

let s8 = ss.indexOf('a' , 2); // 2 is starting index from it start searching
// let s8 = ss.indexOf('is'); // 2

let s9 = ss.indexOf('is', 3); // 3

// 3rd encounter 
let i1 = ss.indexOf('a'); // first encounter

let i2 = ss.indexOf('a', i1 + 1); // second encounter

let i3 = ss.indexOf('a', i2 + 1); // third encounter


//replace  replaceAll

let s10 = 'hi this is aryan jain here';
let s12 = s10.replace('a' , '#');

let s11 = s10.replace('aryan', 'aryan123');
let s13 = s10.replaceAll('a' , '##');


// repeat
// if you want to repeat a value 

let s14 = 'hi this is aryan jain here'.repeat(3);

console.log(s14);


//toUpperCase
// to LowerCase


//trim -> remove white spaces in the starting and ending

let s15 = '  hi this is aryan jain here  ';

let s16 = s15.trim();

console.log(s16);