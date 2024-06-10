//closure
 // a function bundled  together with reference to its surrounding state or lexical enviroment ..

function outer() {
    let x = 10;
    function inner() {
        console.log(x);
    }
    // inner();
    return inner;
}

let fn = outer();
fn(); // function inner() {
//     console.log(x);
// }// no value of x in the function thennnnn howwww exx comeee in my life 
// due to closure (hehe) 


// real life uses 
function counter (){
    let count = 0;
    return function(){
        count++;
        // console.log(count);
        return count;
    }

}
let getcount  = counter();
console.log( getcount());

function counter2(){
    let count = 0;
    return {
        getcount : function(){
            count++;
            return count;
        }
    }
}

let getcount2 = counter2();

console.log(getcount2.getcount()); // multiple methods ko ek hi funccion se use krneke liye object retunr krenge

// small application



