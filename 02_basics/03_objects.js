//singleton

 //object literals

 const mySym = Symbol("key1")

 const JsUser ={
    name: "joel", 
    "full name": "joel mathew koshy",
    [mySym]: "mykey1",
    age: 18,
    location: "Kerala",
    email: "joel123@google.com",
    isLoggedIn: false,
    lastLoginDays: ["monday","saturday"]
 }

 console.log(JsUser.email);
 console.log(JsUser["email"]);
 console.log(JsUser["full name"]);
 console.log(JsUser[mySym] );

 JsUser.email= "joellll@gmail.com"
 //Object.freeze(JsUser)
 JsUser.email = "goelll@gmail.com"
 console.log(JsUser); 

 JsUser.greeting = function(){
   console.log("hello js user"); 
 }
 JsUser.greetingTwo =function(){
   console.log(`hello js user, ${this.name}`);
   
 }

 console.log(JsUser.greeting());
 console.log(JsUser.greetingTwo());
 
 
 
 
 
 