
//ptoperties

// parent 

let para1 = document.querySelector('#para');
console.log( para1.parentElement); //article
console.log( para1.parentElement.parentElement); // section
// console.log( para1.parentElement.parentElement.parentElement.parentElement.parentElement); // null

//child

let arti = document.querySelector('#arti1');
let bachhe = arti.children

for (let item of bachhe){
    item.style.color = 'red';
}

// nextElementsibling

console.log(arti.nextElementSibling); //para2

// arti.previousElementSibling 
