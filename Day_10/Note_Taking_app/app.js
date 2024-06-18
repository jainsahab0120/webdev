
let startbtn = document.querySelector('.add');

let input = document.querySelector('input');
let addbutton = document.querySelector('#addbutton');

let list = document.getElementById('list');
let newlistbutton = document.querySelector('.newlistbtn');


//start

startbtn.addEventListener('click' , ()=>{
    input.style.display = "block";
    addbutton.style.display = "block";
    
    startbtn.style.display = "none";

})
addbutton.addEventListener('click' , ()=>{
    newlistbutton.style.display = "block";
    // extracting the value from input
    let text = input.value;
    if(text!= ""){
        list.style.display= "block";

    //creating a list item
    let li = document.createElement('LI');

    li.innerText = text;
    let deletbtn = document.createElement('button');
    deletbtn.innerText = "delete";
    deletbtn.style.padding = "2px 7px";
    deletbtn.style.backgroundColor = "grey";
    deletbtn.style.color = "white";
    deletbtn.style.border = "none";
    deletbtn.style.borderRadius = "25px";
    deletbtn.style.fontSize = "8px"
    // adding the list item to the list
    
    list.append(li , deletbtn);
    // input ko clear krna
    input.value = "";

    //remove element
    deletbtn.addEventListener('click' , ()=>{
        li.remove();
        deletbtn.remove()


    })}
    



})
let listArea = document.querySelector('.list-Area');


newlistbutton.addEventListener('click' , ()=>{
    listArea.append(list);
})





    






// button.addEventListener('click' , ()=>{
//     let li = document.createElement('li');
//     let btn = document.createElement('button');
//     button.innerText = "delete";

//     li.innerText = input.value;
//     list.append(li , button);
//     input.value = '';
    


// })

// list.addEventListener('click' , (e)=>{
//     if(e.target.tagName == 'LI'){
//         e.target.remove();
//     }
// })