const express = require('express');
const app = express();
const path = require('path');
// const style = require('./public/css/style.css');
app.set("view engine" , "ejs");
app.set('views' , path.join(__dirname , "views"));

// static file ko use krne do
app.use(express.static(path.join(__dirname , "public")))

app.get('/' , (req , res)=>{
    res.render('index');

})


app.listen(8080 , ()=>{
    console.log("Server connected on port 8080");
})

// code ko hisso mein todna hota hai to views ke folder ke ander ek folder banate hai (partials) header.ejs and footer.ejs