const send = require("send")

    //     get                                 post 
    // this should be used to                 this should be used to make
    // fetch /retrive data                        changes in server (DB);
    // 2. here the data is available inside url  2. here the data is avilable as req.body
    // as query parameter        
    // 3. less secure (data send kr sakte       3.more secure( urlx)
    //   hai pr kret nhi hai )
    // 4. data sent using get using that    4data of differenet types can be sent 
    //    will only be available as QP        text xml json
    // 5. limited amount of data can be send        there is no limit of data 
                                                // (huge huge amt of datda can be send)                              
    
const express = require('express');
const app = express();
const path = require('path');
const { log } = require("console");

app.set("view engine" , "ejs");
app.set('views' , path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, "public"))) // for static files 

app.use(express.urlencoded({ extended: true })) // middleware to get the form data
 // for parsing application/x-www-form-urlencoded


app.get('/' , (req , res)=>{
    res.render('index');
})

//get request ko sambahl rha hia
app.get('/user' , (req, res)=>{
        log(req.query)
        let {username , age} = req.query;
        log(username);
    res.send("get request send succesfully");
})
// post mehtod ko sambhal rha hai
app.post('/user' , (req ,res)=>{
    console.log(req.body)
    res.send("post request send succesfully");
})
// post req mein data ka format hai formdata
// express body nam ka object req ke sath attach kr det ahi 
// by default undefined 

app.listen(8080 , ()=>{
    console.log("Server connected on port 8080");
})

// code ko hisso mein todna hota hai to views ke folder ke ander ek folder banate hai (partials) header.ejs and footer.ejs
    
