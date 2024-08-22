const name = "joel"
const repoCount ="23"

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

//another way of declaring string

const gameName = new String('joelmkkldr')

console.log(gameName[0]);
console.log(gameName.length);
console.log(gameName.toUpperCase());

console.log(gameName.charAt(2)); 
console.log(gameName.indexOf('l'));



const newString = gameName.substring(0 , 4)
console.log(newString);


const anotherString = gameName.slice(-8 , 4)
console.log(anotherString);


const newStringOne = "      Joel       "
console.log(newStringOne);
console.log(newStringOne.trim());




const url = "httpd://joel.com/joel%30mathew"
console.log(url.replace('%30', '-'))
console.log(url.includes('hitesh'));

