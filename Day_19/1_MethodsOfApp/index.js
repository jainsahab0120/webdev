const express = require('express');
const app = express();

// Middleware function ye fnc har bar run krta hai jab bhi aoka browser or apka user kisi bhi type ki req bhejta hai  
// runs on every incoming req 
//bicholiya 
// app.use(callback) compulsory 

// adding app.use()

app.use ('/miidleware',(req , res)=>{ // middlebare function // accept call back 

    // console.log(res);
    // console.log(req);
    res.send('<h1>hulululu</h1>') // The body parameter can be a Buffer object, a String, an object, Boolean, or an Array
    
    console.log('you made it a speciic path ');
    
    // console.log("you made a request");
    
})

// server  2 format mein chejo ko store krega req and res in the form of object   and req is also object and res is also object 


// app.use((req, res, next) => {
//   console.log(`Time: ${new Date()}`);
//   next();
// });

//routing 
// for each incoming req you will get different response 
// types of request or http module 


// get , post , patch , put , delete ,etc 


app.listen(8080 ,()=>{
    console.log("server running");
    
})