const express = require('express');
const app = express();

app.get('/search' , (req , res)=>{
    console.log(req.query.search);// key 

    let {search} = req.query;
    
    res.send(search);

})

app.listen(8080 , ()=>{
    console.log("server connected on port 8080");
})