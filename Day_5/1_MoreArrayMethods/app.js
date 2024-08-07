//more arraymethodss
// foreach() - it accepts a callback function 
// by default ismein jo funciton ayega wo automatically call hoga

// array.forEach(element => {
    
// });
let students = ['aryan' , 'manish ' , 'mayank' , 'lakahn' , 'divyanshu'];

// students.forEach(function(item){
//     console.log(item);

// })

students.forEach(function(item  , index ){
    console.log(item);

})
// it doesnot return anything that means it return undefined



// map  - it return a new array
let marks = [10 , 20, 30, 40, 50 , 38,29 , 23];

let newMarks  = marks.map(function(item , index){
    // return item*4;
    return [item*2 , index ];

}) 

console.log(newMarks);

//filter  it also accept a cb  and it retunr a array but it only sends the truthfullvalue mtlb agar condition true hogi to to send hogi verna nhi hogi

let number = [10, 20, 30, 40, 50, 38, 29, 23];

let newnum = number.filter(function(item, index){
    return item > 30;
})

console.log(newnum);

//sort() - lexographically sort krt ahai 
// mtlb 1 11 12 21 22 222 32 3333 41 444 5 
let arr = [1,2,232,32,32,32,3,23,23,2,32,32,4,24,353643645734,634,6,346,43,64535,547546,];
let newArr = arr.sort();
console.log(newArr);


// for asc and desc 
let arr1 = [1,2,123,23,2,42,44,63,57,65,3,532,53,567,435,45,45,4,];

let newArr1 = arr1.sort(function(a,b){
    return a-b;// for asc
    // return b-a ; //for desc
})

console.log(newArr1);


// resturant 
let menu = [
    "chicken tikka " , 'dalfry' , 'hakka noodle ' , 'egg curry ' , 'panner bm' , 'dal makhni'
];
let vegmenu = menu.filter(function(item) {
    return !(item.includes('chicken') || item.includes('egg'));
})

console.log(vegmenu);

// reduce 

let numbers = [1,2,3,4,5];
let sum = numbers.reduce(function(accumulator, currentValue){
    return accumulator + currentValue;
}, 0);

console.log(sum);


// some 

let someArray = [1,2,3,4,5,6,7,8,9,10];
console.log(someArray.some(function(item){
    return item % 2 === 0;
}));
// some return true or false if any one satisfy the condition

// every

console.log(someArray.every(function(item){
    return item % 2 === 0;
}));

// some return true or false if any one satisfy the condition



