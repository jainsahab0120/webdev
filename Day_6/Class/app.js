// there is no differecne in class and constructor function 
// its just a syntactical sugar (beautfied syntax)

// function Person(firstName , lastName){
//     this.firstName = firstName;
//     this.lastName = lastName;


// }
// let person1 = new Person("hola" , "ram");
// console.log(person1);



// class syntax
// class  Person {
//     constructor (){
        // code


//     }

// }

class Person{
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    PrintName(){
        console.log(this.firstName + " " + this.lastName);

    }
    getName(){
        return this.firstName + " " + this.lastName;
    }
}

let per = new Person("aryan" , "jain" );
console.log

//inhertence 
class Student extends Person{
    constructor(firstName , lastName , contactNo ){
        super(firstName , lastName); // run the constructor of the extended class 
            this.contact = contactNo;

    }
}

let stu1 = new Student("kaju " , "kismis" , 90);
console.log(stu1);







