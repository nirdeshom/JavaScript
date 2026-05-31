const accountId = 12345;
let accountName = "Nirdesh";
let accountEmail = "nirdesh@google.com";
var accountPassword = "Ni@12";
accountCity = "Noida";
let accountState;  // output : undefined

// Not Allowed
// accountId = 54321;  // TypeError: Assignment to constant variable.
accountEmail = 'nir@google.com';

console.log(accountId);
console.log(accountEmail);
console.table([accountId, accountName, accountEmail, accountPassword, accountCity, accountState]);

/*
prefer not to use var
because of issue in block scope and functional scope
*/
