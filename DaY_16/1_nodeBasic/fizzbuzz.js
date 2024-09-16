
let num = process.argv.slice(2)[0];
// let number = num[0]

console.log(num);
// bekar approach 
// for(let  i = 1  ; i <= num ; i++){
//     if((i% 3 == 0) && ( i % 5 == 0) && (i >= 5)){
//         console.log("fizzbuzz");
        
//     }
//     else if ((i % 3== 0) && (i >=2)){
//         console.log("fizz");
//     }
//     else if ((i % 5 == 0) &&( i >= 4)){
//         console.log("buzz");
//     }
//     else { 
//         console.log(i);
//     }
// }

//optimised 
// function fizzbuzz(i){
//     for(let i = 1 ; i <= num ; i++){
//         let output = "";
//         if(i % 3 === 0) output += "fizz";
//         if(i % 5 === 0) output += "buzz";
//         console.log(output || i);
//     }
// }

fizzbuzz(num)
// best 

function fizzbuzz(n){
    let cnt3 = 1;
    let cnt5 = 1;
    for(let i = 1; i <= n; i++){
        
        let output = "";
        if(cnt3 === 3) {
            output += "fizz";
            cnt3 = 0;
            
        }
        if(cnt5 === 5) {
            output += "buzz";
            cnt5 = 0;
        
    }
        console.log(output || i);
        cnt3++;
        cnt5++;
    }
}

