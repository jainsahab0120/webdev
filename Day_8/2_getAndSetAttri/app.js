
//get attribute
let anchor = document.querySelector('a');
console.log( anchor.getAttribute('href'));
console.log(anchor.getAttribute('class'));

// setAttribute 

anchor.setAttribute('href' , 'https://www.facebook.com');

// real life use 

let h1 = document.querySelector('h1');
h1.setAttribute('class' , 'color');


let input = document.querySelector('input');
input.setAttribute('type' , 'password') 