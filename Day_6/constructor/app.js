
function fun (){

}
let nam = fun();
console.log(nam);

// function user (){

// }
// let user1 = new user();
// console.log(user1);

// new keyword se 

function User ( user , mail){
    this.username = User;
    this.email = mail;
    // this.discription = function() {
    //     console.log(`email of ${this.username} is ${this.email}`);
    // };

}
let user1 = new User('aryan' , 'aryan.ajtdl156@gmail.com');
console.log(user1);
console.log(user1.discription());


// constructor function use kiye jate hai as a blue print 
// convention  - capital letter se constructor ko start krna chahiye

User.prototype.description = function (){
    return `my name is ${this.username}`;
}
console.log(user1.description());
// doubt 
