//user:object, which has label/property/keys: which has value
const user = {
   email: getEmail(),
   password: getPassword(),
   createdAt: getCreatedAt(),
   id: getId(),
};

console.log(user); // adding .label to target just the one label
console.log(copyOfUser);

/* functions start here */

function getEmail() {
   // get the users email from the input with jQuery
   return `mike@gmail.com`;
}
function getPassword() {
   // get the users password from the input with jQuery
   return `skywalker83`;
}
function getCreatedAt() {
   // generate createdAt number, e.g. 1600730742258
   return Date.now();
}
function getId() {
   // generate id string, e.g. "005061"
   return `005061`;
}
