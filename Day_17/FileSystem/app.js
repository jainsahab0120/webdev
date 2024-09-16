// file FileSystem is same as database 

// Crud 

// i dont need anything to install to to use file system in node 

const fs = require('fs');
console.log(fs);

// create / write 
//abc is a file name
// fs.writeFile('file',data , options , callback)

let data = 'neha mam sending notes;'
fs.writeFile('abc.txt',data,{
    encoding:'utf-8',flag : 'w',} 
    ,(err) =>{
    if(err){throw err}
    console.log("file created successfull");
    
})
let data2 = "me data2 "
fs.writeFileSync('abc.txt' , data2);



fs.readFile('abc.txt', {
    encoding : 'utf-8', // data apne readable format ke liye 
    flag :'r'
}, (err)=>{

    if(err){throw err}
    console.log(data);
   
})

// or same as above 
let data3 = (fs.readFileSync('abc.txt'));
console.log(data3.toString);


// reading a file system utf -8 is nedded to avoid buffer 

// two ways to get rid of buffer 

// 1. encoding 
// 2. toSting 


// update 

let data4 = "updated data"
fs.appendFile('abc.txt',data4,{
    encoding:'utf-8',flag : 'w',} 
    ,(err) =>{
    if(err){throw err}
    console.log("file updated successfull");
    
})

fs.appendFileSync('abc.txt',"agg lage chahe basti mein ");



// -------------delete-------------
// unlink 
fs.unlink('abx.txt' ,(err)=> {
    if(err) {throw err;}
    console.log("file deleted successfull");
}) 

fs.unlinkSync('abx.txt'); // same as above
