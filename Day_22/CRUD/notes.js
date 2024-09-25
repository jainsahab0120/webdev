// CRUD - create read update delete 

// //create
// jab mein ek document add krunga mongoDb automatically us document ke pass ek unique id generate krega

// db -- collections -- document (crud)

// db.movies.insertOne({})
// current databse .collection.method accept an object 

// naruto> db.movies.insertOne({name:"super-man",imdb : 7.7})
// {
//   acknowledged: true,
//   insertedId: ObjectId('66ee63618d5ba664a7c73bf8')
// }

// //read

// db.movies.find() or ({}) are qual 
// give all the collections

// db.movies.insertMany([{},{},...]); // all object in a array 

// naruto> db.movies.insertMany([{name:"spider-man",imdb : 5.7},{name:"fast-x" ,imdb:2.3}])
// {
//   acknowledged: true,
//   insertedIds: {
//     '0': ObjectId('66ee659f8d5ba664a7c73bf9'),
//     '1': ObjectId('66ee659f8d5ba664a7c73bfa')
//   }
// }
// //find with conditiion

// naruto> db.movies.find({imdb:2.3})
// [
//   {
//     _id: ObjectId('66ee659f8d5ba664a7c73bfa'),
//     name: 'fast-x',
//     imdb: 2.3
//   }
// ]


// naruto> db.movies.find({imdb:2.3,name:"super-man"}) act as a and 


// //update

// db.movies.updateOne({kispe},{$set:{kya,kya}) // jo pehle mil gay use change krega

// naruto> db.movies.updateOne({name:"fast-x"},{$set:{imdb:10 ,name:"sarkata"}})


// naruto> db.movies.updateMany({name:"super-man"},{$set:{name:"hululu" ,imdb:9}})

// //delete

// db.movies.deleteOne({name:"hululu"}) // delete first occourence

// db.movies.deleteMany({name:"hululu"}) // delete all occourence

// db.movies.deleteOne({}) // delete first one 

// db.movies.deleteMany({}) // sab delete ho jayga


// //operator 

db.movies.find({imdb:8}) 
//or 
db.movies.find({imdb:{$eq:8}})

//greater than or greater than equals

// db.movies.find({imdb>5}); wrong

db.movies.find({imdb:{$gt:5}});//greater than
db.movies.find({imdb:{$gte:5}});//greater than equals

//less than or less than equals

// db.movies.find({imdb<5}); wrong

db.movies.find({imdb:{$lt:5}});//less than
db.movies.find({imdb:{$lte:5}});//less than equals

//not equals

db.movies.find({imdb:{$ne:5}})//not equal 

//inside 

    db.movies.find({imdb:{$gt:5,$lt:8}}) // greater than 5 and less than 8
    db.movies.find({imdb:{$gte:5,$lte:8}}) // greater than or equals 5 and less than or equals 8

    //or
    db.movies.find({imdb:{$in:[5,6,7,8]}});

//logical operator 

db.movies.find({imdb:{$gt:5,$lt:8}})
db.movies.find({$and:[{imdb:{$gt6}},{imdb:{$lt:10}}]})

db.movies.find({$or:[{imdb:{$gt:10}},{imdb:{$lt:8}}]})


    