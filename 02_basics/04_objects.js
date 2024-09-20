//const fbUser = new Object()
const fbUser = {}

fbUser.id = "123abc"
fbUser.name = "joel"
fbUser.isLoggedIn = false

//console.log(fbUser);
 
const regularUser = {
    email: "some@gmail.com",
    fullname:{
        userfullname:{
            firstname: "joel",
            lastname: "koshy"
        }
    }
}
//console.log(regularUser.fullname.userfullname);

const obj1 = {1:"a" , 2:"b"}
const obj2 ={3:"a", 4:"b"}

//const obj3 = Object.assign({}, obj1,obj2)
const obj3 ={...obj1,...obj2}
console.log(obj3);

const users=[
    {
        id:1,
        email:"h@gmail.com"
    },
    {
        id:1,
        email: "h@gmail.com"
    }
]
users[1].email

console.log(fbUser);
console.log(Object.keys(fbUser));
console.log(Object.values(fbUser));
console.log(Object.entries(fbUser));

console.log(fbUser.hasOwnProperty('isLoggedIn'));

const course ={
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

const {courseInstructor: instructor} = course        //destructure
console.log(instructor);

