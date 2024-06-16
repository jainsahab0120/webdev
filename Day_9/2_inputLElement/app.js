
let ele = document.querySelector('input');
let heading = document.querySelector('h1');


ele.addEventListener('input' , (e)=>{
    console.log('input elemment chal gya');
    console.log(e.target.value);
    heading.innerHTML = e.target.value;

})

// whenever an event is run /executed along with funciton/event , an object is also attached with it which we can have access of 

// target jis element pr event trigger hua hai 

// object - e / event

