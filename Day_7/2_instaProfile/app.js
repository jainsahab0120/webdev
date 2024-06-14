// let start = function step1(){
//     console.log("start");
//     setTimeout(()=>{
//         console.log("image select kr rha hu");
//         let image = "kalki 2398 AD"

//         step2(image);

//     },4000);

// }
// function step2(image){
//     setTimeout(()=>{
//         console.log(`${image} editing`);
//         step3(image);

//     }, 3000)

// }
// function step3(image){
//     setTimeout(()=>{
//         console.log(`${image} done`);
//         console.log("the end");
//     }, 2000)
    
// }
// start();


function step1(fn){
    setTimeout(function(){
        console.log('slecting image');
        // return 'image';
        fn('image')
    } , 4000)

}

function step2(image , cb){
    setTimeout(function(){
        console.log(`applying filter to ${image}`);
        // return 'filtered image';
        cb('filtered image');
    } , 2000)
}

function step3(filteredImage ,  cb){
    setTimeout(function(){
        console.log(`badiya sa caption on ${filteredImage}`);
        // return 'fotva peluss captionvaa dono'
        cb('filered with caption')
    } , 3000)
}
    
function step4(final){
    setTimeout(function(){
        console.log(` ${final} uploaded`)
    } , 2000)
}




step1(function(image){
    step2(image , function(filteredImage){
        step3(filteredImage , function(finalImage){
            step4(finalImage);
        })
    });
})

// pyramid of doom  and call back hell
// when your code grow horizontally more 
// dependency jada hai 

// callbacks -- > promises -- > async await 




