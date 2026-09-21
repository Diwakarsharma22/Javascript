// here we are learning how to assign variables and constants in js

const accountId=1222005
let accountEmail = "diwakar@gmaol.com"
var accountPass="1234"
accountCity="jaipur"

// yaha pe hum accountId ko change kr ke dekhte hein kya print hoga 
/*accountId=2212 /* /workspaces/Javascript/JSbasics/first.js:9
accountId=2212
         ^

TypeError: Assignment to constant variable.*/


// baki sab ko change krke dekhte hein ab

accountEmail = "sharma@gmaol.com"
accountPass="1357"
accountCity="kareli"
// ye sare change ho jate hein 

// var use nahi krenge bcz of issue in block and functional scope 

// bina  variable ke age kuch bhi likhe bhi assign kr sakte but these are not good practises toh avoid kro 

let accountState; // use ; ya nahi 
// ise print krane pe undefined ayega kyuki koi value assign nahi ki hai 





// agar ek sath dher sare console.log krane hon toh use console.table
console.table([accountId,accountEmail,accountPass,accountCity]);
console.log(accountState);



