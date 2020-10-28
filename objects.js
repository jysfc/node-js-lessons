//user:object, which has label/property/keys: which has value
const user = {
   email: getEmail(),
   password: getPassword(),
   createdAt: getCreatedAt(),
   id: getId(),
};

// adding property to objects will mutate the obj. so we want to make a copy first
// using spread makes a shallow copy
const copyOfUser = { ...user }; // Object.assign({}, theNameOfYourObj)
copyOfUser.isActive = true; // target copyOfUser
copyOfUser.tokenExpiredAt = user.createdAt + 86400000; // dot notation get value +
copyOfUser.isCoolPerson = true;
copyOfUser.isCoolPerson = false; // updating property
delete copyOfUser.isCoolPerson; // deleting property

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
