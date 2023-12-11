//primitive datatype


// 7 types : String , Number , Boolean, null , undefined ,Symbol , BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false           // boolean
const outsideTemp = null        //null
let userEmail;            //undefined


const id = Symbol('123')
const anotherId = Symbol('123')      //Symbol

console.log(id==anotherId)


const bigNumber = 123456789  //BigInt



//Reference (Non primitive)

//Array,Objects,Functions

//array
const heros = ['jawad', 'ahmad', 'khan','yousaf']

//Objects

let myObject  = {
    name : 'jawad',
    age:  21 ,
}


//Functions
const myFunction =  function(){
console.log("Hello bro");
}

console.log(typeof myObject);
console.log(typeof bigNumber);
console.log(myObject);

//++++++++++++++++++++++++++++++++++++++++

//Stack (Primitive)   , Heap (Non Primitive )

//stack
//primitive
//copy
//upate the copy value
let myYoutubename = "Jawad"
let anothername = myYoutubename
anothername   = 'Joe'
console.log(myYoutubename);
console.log(anothername);

//heap
//non-primitive
//reference
//update the original value

let userOne = {
   email : 'user@google.com',
   upi: "user@ybl"
}


let userTwo = userOne

userTwo.email = " jawad@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);

