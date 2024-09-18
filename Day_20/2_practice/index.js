const express = require('express');
const app = express();
const path = require('path');

app.set("view engine" , "ejs");
app.set('views' , path.join(__dirname , "views") );

app.get("/",(req , res)=>{
    res.render('math');

})

// let port = 8080;
app.listen(8080 , ()=>{
    console.log("server running at 8080");
    
})