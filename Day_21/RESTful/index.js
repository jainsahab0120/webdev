const express = require('express');
const app = express();
const path = require("path");// node js module


//dummy array instead of db
let comments = [
    {
        id: 0,
        userName: "John Doe",
        comment: "This is a great app!"
    }
    ,
    {
        id: 1,
        userName: "aryan",
        comment: "lal hai!"
    },
    {
        id: 2,
        userName: "Rahul",
        comment: "Good app!"
    },
    {
        id: 3,
        userName: "Ramesh",
        comment: "Awesome!"
    }
]

app.set("view engine" , "ejs");
app.set("views", path.join(__dirname,"views"));

// Middleware to serve static files from the "public" directory
app.use(express.static(path.join(__dirname,"public")));


// Middleware for parsing JSON request bodies
// app.use(express.json());


// Middleware for parsing URL-encoded request bodies
app.use(express.urlencoded({ extended: true }));

app.get('/' , (req , res)=>{
    res.send('root mein apka swagat hai');
 
})

// task 1 -- display all the blogs
app.get('/blogs' , (req, res)=>{
    res.render('index', {comments})
})

//task 2 show a  form to get a new blog - get 
app.get('/blogs/view' , (req,res)=>{
    res.render('new');
})

// task3 -- to actualy ad in array (db)
app.post('/blogs' , (req,res)=>{
   console.log(req.body);
   let {userName , comment } = req.body;
   comments.push({   userName , comment,id: comments.length })
//    res.render('index')
   res.redirect('/blogs'); // to redirect
//    res.send("data aa gya");
})

//task 4 - 
app.get('/blogs/:id',(req, res)=>{
    let {id} =req.params;
    let comment = comments.find(comment=>comment.id == id);//( {(comment) => return comment.id === id})
    if(comment){
    console.log(comment);
    
        res.render('show', {comment})
    }else{
        res.send("comment not found");
    }

})
app.listen(8080 , ()=>{
    console.log("Server connected on port 8080");
})