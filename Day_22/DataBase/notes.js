// Database ---
// collection of similar kind of data 

// data 
// collection of properties 
// information 
// useful data 

// why dont we use file system ??
// Data redundancy -- repeatition / duplicacy inefficiency 

//security (no layers) 
//scalability nhi ho pati 
// limited data 

// types of database
// sql  - jo database output show krne ke liye sql queries ka use krte hai 
// nosql - jo nhi krte hai 

// dbms - database management system 
// software which manage data 
// rdbms  -- relational (jha pr tables hote hai)  -- sql darabases
// nrdbms-- non relational (jha table nhi hote hai ) -- nosql databases -- (object ki form mein store hota hai)


// which database to choose 

    // if data is structured and relational 
    // and you want to have ACID properties (Atomicity, Consistency, Isolation, Durability)
    // and you want to have easy scalability (horizontal scaling)
    // then use relational database  (sql) 
    // if data is not structured and not relational 
    // and you want to have ACID properties (Atomicity, Consistency, Isolation, Durability)
    // and you want to have easy scalability (horizontal scaling)
    // then use nosql database  (mongodb, cassandra, redis)


    // cap consistency Availability partition tollerance 
    ///partition tollerance har datbase jo alag alagh jagah hai same change reflect krn achaye  asap

    // sql is better in case of consistency eg banking system 
    //nosql is better in case of availavility 


    //mongoDb
    // why?? 
    // achitecture 
    // monolithiic  1 db    ||  microservice  mulitple db
    // mongodb  --mern mean mevn
    // use widely 
    // easy syntax 

    // document --each atomic entity inside a collection is called document 

    // how data is being stored in db 
    // bson binary json  -- faster  ,less space and support more basic datatype as compared to json 

    // layer bw mongo and express is odm 
    // object document model in case of nosql(mongoose) 
    // object relation modelin case of sql

    // work of odm is to convert json/bson data into usable js object 
    


