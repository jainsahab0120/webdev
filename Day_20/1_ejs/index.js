const express = require('express') ; // function
const app = express()  // object 
const path = require('path');


// app.get('/' , (req , res)=>{
//     res.send("hogya bhaii");
//     console.log(req.params);
//     console.log(req.query);
    
    

// })

// templating engine/ language  ejs 

// <% 'Scriptlet' tag, for control-flow, no output
// <%= Outputs the value into the template (HTML escaped) evaluate 

// view engine by default undefined

app.set("view engine" , "ejs"); // view engine ko set kr diya taki template dhekh payein

// whatever will be your template (1- 10 -1000) all these files will me made inside a folder namely views 

app.set('views' , path.join(__dirname , "views") );// better 
// by default process.cwd() tha but isse problem ho sakti hai agar hum kahi aur khade hai but __ dirname process kha chal rhi hai uska path 

app.get('/' , (req , res)=>{
    res.render('index');// by default views/index.js
})

// render ho rha hai 

// random 
app.get('/random' , (req , res)=>{
    // logic likh kr ans ko template ke ander bhej dunga 
    let number =Math.floor( Math.random()*100)
    res.render('random', {number}); // yha se bheja random mein use kr lenge logic yha likha use wha kiya
    
    


})
const todo = ['goto gym' , ' gotoclub ' , ' drink water'];

app.get('/todo' , (req , res)=>{
    res.render('todo', {todo});
})

app.listen(8080 , ()=>{
    console.log("server connected on port 8080");
})