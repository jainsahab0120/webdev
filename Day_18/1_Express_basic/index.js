const express = require('express') // return a function
const app = express() // it return an entire object 
 // everything is running on Up (mp) whcih has pins or port and every port has different work and some are reserved for specific purpose 
// application ko run karan hai to use ek port dena padega where your webapp will run 
// some ports are occupied for specific task 
// usable port lie bw 2000 to 9000

// kis port pr bat suni jaygi - 8080
app.listen(8080 , ()=>{
    console.log("server connected on port 8080");
    
});
// application ka instance jab connect ho jaye to call back run kr dio cl