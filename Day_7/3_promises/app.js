//promise
 // threee state resolve reject pending
 
// let promise = new Promise(); // new Promise ( ) ek promise return kr dega  it accept one function and it immeditiately call ho jata hai

// let promise = new Promise( (resolve , reject) =>{
//     setTimeout(()=>{
//         // console.log("promise ");
//         // let data = "this is data";
//         // resolve(data); case1
//         // let err = "opps ye ka hua ";
//         // reject (err) case2

//     }, 3000)

// });
// promise.then( function(data){console.log("data");})
// promise.catch(function(err){console.log("err");})

// promise.then (function(data) {
//     console.log(data);
// }).catch()

let kalua = new Promise(function (resolve, reject) {
    setTimeout(() => {
        // resolve("ho gya resolve");
        reject("reject ho gya");
    }, 3000);
});

kalua
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.log(err);
    });

// disadvantage of promise
// .then chaining ho gyi hai jo problem create kregi 

let p1 = new Promise(function (resolve, reject) {
    console.log("3 sec ka wait kro ");
    setTimeout(() => {
        resolve("ho gya resolve");
        // reject("reject ho gya");
    }, 3000);
});

p1.then((data) => {
    // console.log(data);
    new Promise((resolve, reject) => {
     console.log("promise run kr diya hai intejar kro ab");
        setTimeout(() => {
            // resolve("do sec lag gaye");
            console.log("do second lag gaye");
           
            resolve();

        }, 4000);
    })
}
)
.then((data)=>{
    console.log(data);
    console.log("dono kam ho gaye");

})
.catch()
