// event trigger undergoes three phases

// event capturing 
// event target 
// event bubbling

let grandParent = document.getElementById('grandParent');
let parent = document.getElementById('parent');
let child = document.getElementById('child');

grandParent.addEventListener('click' , ()=>{
    console.log('grandParentclicked');
},true)

parent.addEventListener('click' , (event)=>{
    event.stopPropagation();
    
    console.log('parentclicked');
},true)

child.addEventListener('click' , (event)=>{
    
    console.log('childclicked');
},true)

// event capturing
// it follow the heirarchy 
// html -> body -> grandParent -> parent -> child

// jha pohoch gya wo target 





// output 
// childclicked
// parentclicked
// grandParentclicked

// event target hone ke bad wapis ja rha hai 
// event bubbling pehle childclicked fir parentclicked grand parent 

// event start trigering from the topmost level - capturing phase 
// then it reaches the target element - target phase
// then it starts bubbling up form target to topmost level- bubbling phase



// addEventListener(type, listener)
// addEventListener(type, listener, options)
// addEventListener(type, listener, useCapture) 
// use capture accept a boolean value by default it is false 

// use captuure agar true hoga to captuing ke time pr kam kareg 
// grandParentclicked iska useCapture true hai isliye capture ke time pr hi aa gya fir bubbling hue aur as usual jo hona th awo hua 

// childclicked
// parentclicked

// summmary 
// if use capture is true event run in capturing phase else in bubling phase  


// Event.stopPropagation() // capturing  ke time


