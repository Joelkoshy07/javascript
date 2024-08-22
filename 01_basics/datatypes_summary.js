 // #Primitive(call by value)
//7 types : string,number,boolean,null,undefined,symbol,bigint

//#Reference or non primitive

//Array,Objects,functions

const heros = ["afsf", "eqed", "fefwf"] //array


let myObj = {             //object
    name: "joel",
    age:65,
}



//+++++++++++++++++++++++++++++++


//Stack(primitive)==>will get the copy of variable,Heap(non primitive)

let myYoutubename ="joeldotcom"

let anothername = myYoutubename
anothername = "joelmathew"
console.log(myYoutubename);

console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@kjii"
}
 let userTwo = userOne

 userTwo.email = "joel@gmail.com"

 console.log(userOne.email);
 console.log(userTwo.email);
 
 

