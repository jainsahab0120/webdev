// events 
let darkmode = false;
// darkmode 
function doSomething(){
    console.log('mene button daba diya');
    if(!darkmode){
        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'white';
        darkmode = true;

    }
    else {
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
        darkmode = false;
    }
    
}
console.dir(btn) ; // show all detailt of that object 
