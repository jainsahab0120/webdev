// everything inside js is an object



// Arrays - heterogeneous types  (alag alag type ka data store kr sakte hai)
//    - ordered dataStructure

let arr = [
    "string",
    123,
    true,
    12.34,
    {
        name: "abc",
        age: 12
    },
    [1, 2, 3, 4, 5]
]
console.log(arr);
console.log(arr[3]);// 12.34

console.log(arr[30]); // undefined

let length = arr.length; // property
console.log(length);


//imp  ek linemein ek hi exectuable statement hai to semicolon nhi lagaoge to bhi chal jayga


