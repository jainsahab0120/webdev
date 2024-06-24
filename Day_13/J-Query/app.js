// j-query - javaScript library used to help in dom manupilation

// jquery.com is the official documentation 
// jQuery.com -> api docs 
// you might not need jQuery 


// when you include jquery 
// ek varibale acces ho jata hai $  iske basis pr hum sare code access kr sakte hai 

//manupulating elements
// css addding
// 



// jQuery and $ is same 
// $('h1'); work as a querySelectorAll();
console.log($('h1'));

// $('h1').css('color','red');

let secHeading = $('.sec');
console.log(secHeading);

// id ek se jada select nhi hoti class ho jati hai 


//css
// single prop 
// $('h1').css('color','red');

// multiple prop

$('h1').css({
    // 'color':'ca',
    // 'background':'grey'
});


//access text
let text = $('p').text();
console.log(text); // working as textcontent

// change text

$('p').text('this is new text');


// access html

let html = $('p').html();
console.log(html);

// change html

$('p').html('<b>this is new html</b>');

// manupulating attribute


$('a').attr('href'); // getter
$('a').attr('href','https://www.google.com');//setter


// console.log($('a').attr('href'));


//selecting particular elements
$('h1:nth-of-type(2)').css('border' , '2px solid plum');
$('h1:first()').css('border' , '2px solid plum'); // first child nhi chalta aur na hi last child 
// $('h1:last()').css('border' , '2px solid plum');
$('h1').last().css('border' , '2px solid plum'); // alternative method


// input val()
// getting value of inputs 

let inputVal = $('input').val(); // getter
console.log(inputVal);

$('input').val('this is new value');//setter 

//class manupulation
// toggleClass()
// hasClass()
// addClass()
// removeClass()


$('h1').first().addClass('first second');

$('h1').first().removeClass('second');

$('h1').first().toggleClass('first'); // class present hogi to hat jaygi nhi hogi to aa jaygi

$('h1').first().hasClass('first'); // returns boolean value


// events


// $('button').click(()=>{
//     console.log("click kr diya");
// })

$('button').on('click',()=>{
    console.log("click kr diya");
})

// important 
// this is not same as of your js // ye alag hai 
// this point to the element over which the event is being triggered
// $('button').on('click',()=>{
//     console.log(this);
//     })


$('li').on('click' , function(){
    $(this).css('color','red');

})

// arrow function nhi chalta hai


$('input').keyup(function(){
    // console.log( $(this).val());
})

// addEventListener -> on  

$('input').on('keyup',function(){
    // console.log( $(this).val());
})

$('input').keypress(function(e){
    if(e.which == 13){
        console.log($(this).val());
    }
})
// 13 is the enter number 


$('#out').on('click' , function(){
    $('#container').fadeOut();

})
$('#in').on('click' , function(){
    $('#container').fadeIn();

})
$('#toggle').on('click' , function(){
    $('#container').fadeToggle();

})