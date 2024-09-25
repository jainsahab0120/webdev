const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/nobita') // nobita is the name of db
.then(()=>{
    console.log("db connect ho gya");
})
.catch((err)=>{
    console.log(`${err} aa gya`);
})
//127.0.0.1:27017 - portno like local host 

// .connect  is a method which return a promise 
// ya to promise reoslve(.then) hoga ya reject (.catch)


//interact kr liya db ke sath 
// mtlb moongose aa gya aur ismein js likh rahe hai 

// pr mujhe to Collection chahiye which have document 
// pr hum js se karenge to use model (js class) bolenge representing collection only 

// in order to create a collection   --- schema (blueprint) i cant create directly i will have a schema  
// scheema --- > model --- > intercat with db 

// data  - db mein store krte hai 
// server sending is data 
// and server is express.js i .e. some js files 
// and this is being done with odm 

// json --- > mongoose ---- > usable js 
// usable js ---- > mongoose --- > json 

// Schema tells how the data will be mapped (kaise rakhna hai) like name ---> string  , imdb --- > number 
// _id mongoose banyega 

// 270170 27018 27019 all these port are availbe to interact with data base 


//Schema()
const movieSchema = new mongoose.Schema({
    name : String,
    rating : Number ,
    year : Number ,
    isWatched : Boolean

});

//model (js class)
// model humesha singular rahega (products wrong product right)
// first leeter always capital 

 const Movie =  mongoose.model('Movie',movieSchema); //js class
 // movie ke model hai
 
 let avengers = new Movie({
    name : "avengers",
    rating : 9.5,
    year : 2019,
    isWatched : true

 })
 avengers.save();
 let ironman = new Movie({
    name : "ironman",
    rating : 8.9,
    year : 2008,
    isWatched : false
 })
 ironman.save(); 
 console.log(avengers);

 // ismein save ki jarurat isliye padi kyunki js fucntion hai aur insertone bagera mein isliye nhi padi kyunki 

 
