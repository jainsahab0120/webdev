// this  keyword 
// to access properties inside object

var person = {
    name: "John",
    age: 25,
    city: "New York",
    bulao : function (){
        console.log(this.name +" ko bulao");
        // here this keyword method ke object ko point krega
        console.log(`${this.name} ko bulao`);
    }

};
person.bulao();

