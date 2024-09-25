const express = require('express');
const app = express();
const path = require("path");// node js module
const methodOverride = require('method-override');
const { log } = require('console');
//uuid
const { v4: uuidv4 } = require('uuid');
uuidv4(); // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'

//dummy array instead of db
let comments = [
    {
        // id: 0,
        id:uuidv4(),
        userName: "John Doe",
        comment: "This is a great app!"
    }
    ,
    {
        id:uuidv4(),
        userName: "aryan",
        comment: "lal hai!"
    },
    {
        id:uuidv4(),
        userName: "Rahul",
        comment: "Good app!"
    },
    {
        id:uuidv4(),
        userName: "Ramesh",
        comment: "Awesome!"
    }
]

app.set("view engine" , "ejs");
app.set("views", path.join(__dirname,"views"));

// Middleware to serve static files from the "public" directory
app.use(express.static(path.join(__dirname,"public")));
app.use(methodOverride('_method')) // _method is the name now 
// method overridingfor post to patch in this case

// Middleware for parsing JSON request bodies
app.use(express.json());


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
   comments.push({   userName , comment,id:uuidv4() })
//    res.render('index')
   res.redirect('/blogs'); // to redirect
//    res.send("data aa gya");
})

//task 4 - to show info about one particular blog
app.get('/blogs/:id',(req, res)=>{
    let {id} =req.params;
    let foundcomment = comments.find(comment=>comment.id == id);//( {(comment) => return comment.id === id})
    if(foundcomment){
    console.log(foundcomment);
    
        res.render('show', {foundcomment})
    }else{
        res.send("comment not found");
    }

})
// Task5 - to get the form for editing the blog
app.get('/blogs/:id/edit' , (req, res)=>{
    let {id} = req.params;
    let foundcomment = comments.find(comment=>comment.id == id);//( {(comment) => return comment.id === id})
    console.log(foundcomment);
    // res.send('edit form aa gya');
    res.render('edit' ,{foundcomment});
    
    

})// both are used in edit
// ---------------put-------------- batch ----------
// jab sara data change krna ho  |  partial changes krna ho 
// (all the fields)                 (not all the fields)


// task 6 - actually editing the blog using  patch 
app.patch('/blogs/:id',(req,res)=>{
    let {id} = req.params;
    let foundcomment= comments.find(comment=>comment.id == id);//( {(comment) => return comment.id === id})
    console.log(req.body);
    let {comment} = req.body;
    foundcomment.comment = comment;
    res.render('index',{comments});

    
//    res.send('patch request send');


})
    

// task 7 delete a blog 
// agar mujhe kuch chej delete karani hai to post chahiye aur post hai to form hoga hi to butn form ke ander ayega 

app.delete('/blogs/:id',(req,res)=>{
    let {id} = req.params;
    comments= comments.filter(comment=>comment.id!= id);
    
    res.redirect('/blogs'); // to redirect


})

app.listen(8080 , ()=>{
    console.log("Server connected on port 8080");
})