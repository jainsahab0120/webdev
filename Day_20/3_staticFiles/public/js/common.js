let btn = document.querySelector('#btn');

btn.addEventListener('click' , ()=>{
    let num = prompt('Enter a number');
    console.log(num);
    let square = Math.pow(num, 2);
    console.log('Square of the number is', square);
})