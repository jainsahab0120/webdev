
let product = document.querySelectorAll('figure');
console.log(product);

// not the good way 


for (let item  of product) {
    item.addEventListener('click' , ()=>{
        // console.log(item.innerText);
        // console.log(item);
        item.style.border = '2px solid red';
    })
}

// dynamically add karoge to prob dega 

// Event Deligation  -- parent pr event lagao rather than bohot sare child pr

let container = document.querySelector('#container');

container.addEventListener('click' , (e)=>{
    // console.log(e);
    
    if(e.target.nodeName == 'FIGURE'){
        console.log(e.target.innerText);
    e.target.style.border = '2px solid red';}
})
