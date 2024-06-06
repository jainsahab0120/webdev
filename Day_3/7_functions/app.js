//function

//heart of js

function fun() {
    console.log("hello");
}
// when we not pass total arguement it shows NaN

function fun1(num1 , num2){
    return num1  + num2;
}
console.log(fun1(30));// NaN

function fun2 (num1 , num2){
    console.log(num1); // 30
    console.log(num2); // undefined
}
console.log(fun2(30)); // undefined bcz it is not retunrninng anything to by default


// default paramaterized funtion
function fun3 (num1 , num2 = 40){
    console.log(num1); // 30
    console.log(num2); // 40
}
console.log(fun3(30)); // undefined

function fun4 (num1 = 20 , num2 ){
    console.log(num1); // 30
    console.log(num2); // undefined
}
console.log(fun4(30));  // undefined


// function mein if else mein kuch ni chala to else chalega agar hai to 

function grade (num1){
    if(num1 >= 90){
         return console.log("A");
    }
    else if(num1 >= 80){
        console.log("B");
    }
    else if(num1 >= 70){
        console.log("C");
    }
    else if(num1 >= 60){
        console.log("D");
    }
    else if(num1 >= 50){
        console.log("E");
    }
    else{
       return ("FAil");
    }
}
console.log(grade('csf'));





