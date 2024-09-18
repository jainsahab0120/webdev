const express = require('express');
const app = express();

app.get('/' , (req ,res )=>{
    res.send('root route hai ')

})

app.get('/r/banana' , (req ,res )=>{
    res.send('banana route hai ')

})

app.get('/r/orange' , (req ,res )=>{
    res.send('orange route hai ')

})


// infinite routes banane pad jayenge 
// [localHost:8080/r/ changed data] ---> url 
// changed data ko use krenge 
// req object  --- path and query ( these are also object )

// localHost:8080/r/: subreddit    ----> path se 
// req.params
app.get('/r/:name' , (req ,res )=>{
    // res.send(`fruit route hai ${req.params.name}`)
    console.log(req.params);
    // or destructure 
    let {name }= req.params; 
    res.send(`<h1></h1> my route is huhuhu${name}`)

})

app.listen(8080 , ()=>{
    console.log("port 8080");
    
})

// url - https:   //localhost:8080/search ?  search = live+classes 
//       protpcol  resource url                query parameter