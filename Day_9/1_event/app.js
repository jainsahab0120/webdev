

let btn = document.querySelector('button');

// btn.onclick = (()=>{
//     console.log('clicked');
//     btn.style.backgroundColor = 'green';
//     btn.style.color = 'white';

// })

// btn.onmouseenter = (()=>{
//     console.log('mouse enter');
//     btn.style.backgroundColor = 'white';
//     btn.style.color = 'black';
// })

// problem 

// function one(){
//     console.log('one');
// }
// function two (){
//     console.log('two');
// }

// btn.onfirstclick = one ;
// btn.onclick = two ;

// solution 

// it allows you to run multiple events listener on the same element at a time 
// accepts two arguments 

btn.addEventListener('click' , ()=>{
    console.log('one');
    console.log('two');
})