// document.createElement();

let holaram = document.createElement('div'); // create element
//appendchild() - append only one child at a time and at the end 
// in the last 

let arti = document.querySelector('article');
arti.appendChild(holaram); // appendchild
holaram.innerHTML = "div 3";


let p1 = document.createElement('p');
p1.innerText = "lorem5lkfjisjcfisjfipjsfjsf"
let div4 = document.createElement('div');

div4.innerHTML = "div 4";
let li = document.createElement('li');

li.innerHTML = "li 1";

// arti.append(p1,div4 , li ) // for multiple  child 


// document.prepend() // suru mein add kr dega  multiple 

// important -append aur prepend mein text bhi de sakte hai 
arti.prepend("hello world",p1,div4 , li ) // prepend mein text bhi




