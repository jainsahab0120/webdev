// this kisko point kr rha hai ye decide hai apki function calling se 
// how you call the function 

// direct fucntion calling
// object/method calling
// constuctor
// indirect calling 
// arrow function


//function

// function fun(){

// }
// fun();

//obect / method calling

// let person = {
//     fn : function(){
//         // calling
//     }
// }
// person.fun();

//constructor 

// function Fun (){

// }
// let fun1 = new Fun();

//indirect calling
// call () , apply() and bind ()


// Q1 for object 

let person = {
    number : 2,
    fn : function(){
        console.log(this);
    }


}
person.fn();// Object
// this is pointing to the objecct over which itis being called


let myfun = person.fn;
myfun(); // window

// Q2

let ram = {
    fn: function(){
        function calculate(){
            console.log(this);
        }
        calculate();//regular calling
    }

}

ram.fn(); // window

//constructor calling

function Createobj(){
    this.num = 20;

}
let newObj = new Createobj();

console.log(newObj); // this always point to newly created object 



// .call() , .apply , .bind()

let obj = {
    a:20,
    fn:function(a,b,c){
        console.log(this,a,b,c);

    }
}
obj.fn();// object

let obj2 = {
    a:50
}

obj.fn.call(obj2); // obj mein fn ko call kiya obj2 mein
// jab bhi call( ) ka istemal krte hai to apka this call ke ander object ko poin tkr rha hota hai 

obj.fn.call(obj2 , 1, 2 ,3);

let obj3 = {
    num:3,
    fn:function(){
        console.log(this);
    }
}

let myfun1 = obj3.fn.bind(obj3); //context of this
myfun1();






// arrow function 

let fun = fn  =>{
    console.log(this);
}

