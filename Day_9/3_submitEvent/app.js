let form = document.querySelector('form');

form.addEventListener('submit' , ()=>{
    console.log('form submited');
})


// accessing th eelemensin the form 

form.addEventListener('sunmit' , function(e){
    e.preventDefault();
    console.log(form.elements[0]);
})