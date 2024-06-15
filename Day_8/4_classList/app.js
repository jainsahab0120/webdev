let harry = document.querySelector('h1');
// harry.setAttribute('class' , 'rang akar huliya')

// but there is a better way which is class list


// classList to add multiple class 


// add remove toogle (mltb jo hoga uska ulta ho jayga) 

let arti = document.querySelector('article');
arti.classList.add('rang','huliya') // to add multiple class
// arti.classList.add();
arti.classList.remove('huliya');
arti.classList.toggle('toggle');

let ans = arti.classList.contains('huliya');
console.log(ans); //false 