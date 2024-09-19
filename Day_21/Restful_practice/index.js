const { log } = require("console");
const express = require("express");
const app = express();
const path = require("path");

let arr =[
    {id:1,
        name :"aryan"
    },
    {id:2,
        name :"rahul"
    },
    {id:3,
        name :"mohit"
    }
    //... more data here
] 

// Middleware
app.set("view engine" ,"ejs");
app.set("views" , path.join(__dirname,"view"));
app.use(express.static(path.join(__dirname,"public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));




app.get("/" , function(req, res){
    res.send("root meon apka swagat hai");

})
// Routes
app.get('/blogs',(req, res)=>{
    res.render("index",{arr});
})

app.get('/blogs/view',(req,res)=>{
    res.render('new');
})

app.post('/blogs',(req,res)=>{
    let {id , name}= req.body;
    console.log(req.body);
    arr.push(req.body);
   
    
    res.redirect('/blogs');
})

app.get('/blogs/:id',(req , res)=>{
    let {id} = req.params;
    let blog = arr.find(c=>c.id == id);
    if(blog)
    res.render('show',{blog});
    else res.send("no comment")
})


app.listen(8080,()=>{
    console.log("Server is running on port 8080");
})