const accountId = 144553
let accountEmail = "Jawad@gmail.com"
var accountPassword = "12345"
accountCity = "Peshawar"
// accountId = 2   //not allowed

let accountState;
accountEmail = "khan@gmail.com"
accountPassword = '2121212'
accountCity = "Hayatabad"
console.log(accountId);

/* prefer not to use var because of issue in block scope and functional scope */

console.table([accountId,accountEmail,accountCity,accountPassword,accountState]);
console.log(accountCity)

const price1 = 5;
const price2 = 6;
let total = price1 + price2;

//The two variables price1 and price2 are declared with the const keyword.These are constant values and cannot be changed.The variable total is declared with the let keyword.The value total can be changed.