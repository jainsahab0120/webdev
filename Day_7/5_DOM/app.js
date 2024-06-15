//document object model
// (html) (object) (to manupulate) 

// browser povide an object named document 
// it give a dom tree 

//                   html
//       head                body
// link  title meta      section  p  div


// selectors 
// document.getElementsByTagName
// document.getElementsByClassName
// document.querySelector  slect 1 element 
// document.querySelectorAll  select all element 
// document.getElementById

let h1 = document.getElementsByTagName('h1');//array return krega
console.log(h1);

h1[0].style.color = 'red';
h1[0].style.border = 'solid ,black';
h1[0].style.background = 'grey';

let ele2= document.getElementById('hh');//single element return hota hai 


let  ele3 = document.getElementsByClassName('para') // array 


let ele4 = document.querySelector('p') // 'p' , '#id' , '.class';
let ele5 = document.querySelectorAll('p') // node list (array)
