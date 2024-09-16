// node path (path main folder to the folder in whih your file is there )
// node likhte hi termianal mein node run ho jata hia 


// node 
// process 
// current ongoing process info store krta hai 
// argv store array (path of process (node js kha chal rha hai 
// process.argv
// node index.js 10 20 30 
// store in the form of string in array 
let arr = process.argv.slice(2) //give the input 

// for(let i of arr){
//     console.log(`hello from ${i}`);
    
// }
let i = 0;
while(i < arr[0]){
    console.log(i);
    i++;
    
}
// parseInt()// to convert string to int

process.cwd() // current working directory jha pr khade ho 
__dirname // apka process kha chal rha hai 


