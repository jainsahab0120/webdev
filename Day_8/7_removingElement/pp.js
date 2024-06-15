

//remove child 

let parent = document.querySelector('div');
let child = document.querySelector('h1');
let child2 = document.querySelector('.two');

parent.removeChild(child); // remove from starting but only one at a time


// remove () no need to access the parenst element 
child2.remove(); // remove from anywhere in the document