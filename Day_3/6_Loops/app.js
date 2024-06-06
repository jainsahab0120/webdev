// // for

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// } // 1,2 --- 9 

// // while
// let i = 0;
// while(i < 10){
//     console.log(10);
//     i++;
// }

// // dowhile 

// do {
//     console.log("hululu");
//     i--;
    
// } while (i>=0);

// forin used to iterate inside object 

const object = {
    name: "hululu",
    age: 20,
    gender: "male"
}
for(let i in object){
    console.log(i); // key
    console.log(object[i]); // value
}


// for (const key in object) {
//     if (Object.hasOwnProperty.call(object, key)) {
//         const element = object[key];
        
//     }
// }
// for of  used in looping in iterable items like array map string 
// for (const iterator of object) {
    
// }

let arr = [1,2,2,'adnilasd'];
for(let i of arr){
    console.log(i);
}