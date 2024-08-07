// AJAX - asyncronous js and xml 
// web technique 
// used to make singl epage application 


// Data
// JSON  javaScript object notation
// XML xentensible markup lamguage

// api  -
// end points
// let Json =  

// this is a string and i cannoot work directly on string 


// to cionvert this we have to two method
// parse Stringify 

let jsonString =`[
    {
        "id":1 , 
        "name":"John",
        "occupation":"software developer",
        "address":[]
    },
    {
        "id":2 , 
        "name":"Ajay",
        "occupation":"devops enginner",
        "address":[
            {
                "addressid":1,
                "city": "Delhi",
                "country": "india"
            }
        ]
    }

]`

let jsonObject = JSON.parse(jsonString);// convert you json string into a usable js object or array 

console.log(jsonObject[0].name);

let jsonObj = JSON.stringify(jsonObject); // convert your js object or array into a json string

// string mein tha convert kiya kam kiya firse string mein kr diya


// ways by which i can call api's inside js 

// XMLHttpRequest
// // fetch api  **
// libraries(3rd party)
// jQuery
// axios  **

// XMLHttpRequest -- constructor function 




