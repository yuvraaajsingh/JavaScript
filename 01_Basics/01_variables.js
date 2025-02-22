const accountId = 144553;
let accountEmail = "yuvraj@google.com";
var accountPassword = "12345";   // it is not used in modern programming beacuse of it's scope issue
accountCity = "banka";

let accountState;  //if we not declear anythings in varible than variable will give undefined output.


// accountId = 2  //can't be changed when decleared const

accountEmail = "yuvraj@gmail.com";
accountPassword = "12345678";
accountCity = "Delhi";


console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);