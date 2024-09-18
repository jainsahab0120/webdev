// /routing 
// for each incoming req you will get different response 
// types of request or http module 


// get , post , patch , put , delete ,etc 

// get - get / fatch server se lena 
// why to study methods 
// jo mein req bhejta hu mere server ko us req ko humara server 2 chejo se samjh pata hai 
// 1. method ? like get post etc 
// 2 . path 

// app.get(path , callback)

const express = require('express');
const app = express(); 

//get 
// bad request ko handle krne ke liye

app.get('/' , (req , res)=>{
    res.send('<h> ye mera ialak ahai </h>')

}) // by default / mana jata hai  and default mehthod is get 
app.get('/dog' , (req , res)=>{
    res.send('<h> whoo hooo</h>')

})

app.get('/cat' , (req, res)=>{
    res.send('<h> meuu meuuu </h>')

})
app.get('*' , (req , res)=>{
    res.status(404).send('404 Not Found')
})

app.listen(8080 , ()=>{
    console.log("server connected on port 8080");
})


