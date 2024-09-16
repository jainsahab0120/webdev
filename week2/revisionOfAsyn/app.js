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


// wrapping function using another async fn
function myownsetTimeout(fn , duration ){
    setTimeout(fn , duration);
}
myownsetTimeout(()=>{
    console.log("hi therrr");
    

},2000);

// we can use this pattern to wrap all the function which we want to make async and then call them in sync manner


// now using promise 

function myowmnsettimeout(duration){
    return  new Promise(function(resolve ){
        setTimeout(resolve  , 2000);
    })
    
}
myowmnsettimeout(2000).then(function(){
    console.log("then chal gya");
    
})

