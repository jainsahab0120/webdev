// ways by which i can call api's inside js 

// XMLHttpRequest
// // fetch api  **
// libraries(3rd party)
// jQuery
// axios  **

// XMLHttpRequest -- constructor function 

let req = new XMLHttpRequest();
//connection bana hai
req.open('GET' , 'https://inshorts.deta.dev/news?category=entertainment');

// bhejni hai aoni req 
req.send();

// jab sara kam sahi se ho jaye aur data sahi salamat mile 
req.onload = function(){
    // console.log(this);
    // console.log(samachaar);
    for(let d of samachaar.data){
        let li = document.createElement('li');
        li.innerHTML = `
            <img src=${d.imageUrl} height="100px" />
            <span>${d.title}</span>
        `
        ul.appendChild(li);
    }

};

//lekin agar error aya to 
req.onerror = function(){
    console.log('error');
};

// Get - lena/fetch ,Post - dena ,  

// fetch - return a promise 
