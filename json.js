//user:object, which has label/property/keys: which has value
const user = {
   email: getEmail(),
   password: getPassword(),
   createdAt: getCreatedAt(),
   id: getId(),
   // list of social profiles
   socialProfiles: [
      {
         site: `facebook`,
         username: `mikez`,
         id: `00600756456`,
         profilePic: ``,
         image: {
            small: `small.jpg`,
            medium: `medium.jpg`,
            large: `large.jpg`, // large2.jpg
         },
      },
      {
         site: `twitter`,
         username: `mikezetlow`,
         id: `a4b892cd3f`,
         thumbnail: ``,
      },
   ],
};

const indexOfFacebook = 0;
// console.log(user.socialProfiles[indexOfFacebook].image.small); // small.jpg
const userAsJson = JSON.stringify(user); // value to JSON str
const userAsObj = JSON.parse(userAsJson); //understand JSON in a better format
// console.log(userAsObj);

// Math.round(), Object.assign({}) = global objects
// shallow copy only goes 1 level deep
// undefined returns false

newUser = deepCopy(undefined); // deep copy, losing all previous references
console.log(newUser);
if (newUser !== undefined) {
   // if new user is not undefined, consolelog large3
   newUser.socialProfiles[indexOfFacebook].image.large = "large3.jpg";

   console.log("-----------------");
   console.log(newUser.socialProfiles);
}
// otherwise show the social profiles
console.log("-----------------");
console.log(user.socialProfiles);

/* functions start here */

function deepCopy(obj) {
   const str = JSON.stringify(obj);
   return safelyParseJson(str);
}
// to prevent crashing
function safelyParseJson(str) {
   try {
      JSON.parse(str);
   } catch {
      // if error return the original value
      return str;
   }
   return JSON.parse(str);
}
function getEmail() {
   // get the users email from the input with jQuery
   return `mike@gmail.com`;
}
function getPassword() {
   // get the users password from the input with jQuery
   return `skywalker84`;
}
function getCreatedAt() {
   // generate createdAt number, e.g. 1600730742258
   return Date.now();
}
function getId() {
   // generate id string, e.g. "005061"
   return `005061`;
}
