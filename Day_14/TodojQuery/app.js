$('input').on('keypress' , function(e){
    if(e.which == 13){
        console.log($(this).val());
        let text = $(this).val();
        $('#list').append(`<li>  ${text} </li>`);
        $(this).val('');
        // return false;
    }
    // console.log($(this).val());
})

// delete to do

// $('#list').on('click' , function (e){
//     console.log(e.target.nodeName);
//     if(e.target.nodeName == 'LI')
//         e.target.remove(); 
// });

$('ul').on('click' , 'span' , function(e){
    e.stopPropagation();//to stop event bubbling

    $(this).parent().fadeOut(800 , function(){
        $(this).remove()
    });
    
})

//mark as completed

$('ul').on('click' , 'li' , function(){
    $(this).toggleClass('completed');
})

//clear all completed
$('h1').on('click' , 'span' , function(){
    $('input').fadeToggle();
})