

let buttons = document.querySelectorAll('button');
let input = document.querySelector('input');

for(let button of buttons){
    setTimeout(()=>{
        
    })


    button.addEventListener('click' , ()=>{
        let text = button.innerText;
        console.log(text);
        if(text == "AC"){
            input.value = "";
        }
        else  if ( text == "=")
            {
                try{
                    input.value = eval(input.value);

                }
                catch(e){
                    input.value = "not a valid syntax"

                }
                
            

        }
        else if(text == 'DEL'){
            input.value = input.value.slice(0, -1);
        }
        else {
            input.value += button.innerText;

        }
       
        
    })
}
