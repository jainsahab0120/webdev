// DRY 
// dont repeat yourself 

function square (n){
    return n * n;
}

function cube(n ){ 
    return n * n*n;}
// function someOfCube(a , b){
//     return cube(a) + cube(b);
// }

// console.log(someOfCube(2, 3));
// function someOfSquare(a , b){
//     return square(a) + square(b);
// } this is a wrommng practice as we have to write the code again and again 

function sumOfsomeThing(a ,b ,task){
    return task(a) + task(b);

}

console.log(sumOfsomeThing(5, 6, square));

