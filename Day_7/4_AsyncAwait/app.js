async function fn(){
    await new Promise((resolve , reject)=>{
        setTimeout(() =>{
            console.log("3 sec ho gaye");
            resolve();
        }, 3000 );
    })

    await new Promise((resolve , reject)=>{
        setTimeout(()=>{
            console.log("4 sec ho gaye");
            resolve();


        }, 4000)

    })
    console.log("dono kam ho  gaye");


}
// console.log(fn());  // promise return krega

// async always work with await 


fn();