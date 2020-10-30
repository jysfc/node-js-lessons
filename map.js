// map transform a list of things to different things
// return a new array to what you changed it to
// not a side effect, true function
const users = [
   {
      name: "Mike",
      isActive: true,
   },
   {
      name: "John",
      isActive: true,
   },
   {
      name: "Michelle",
      isActive: false,
   },
];

const formattedUsers = users.map((user) => {
   //make a copy
   const newUser = { ...user };
   // mutable actions
   newUser.createdAt = Date.now(); // add property
   delete newUser.isActive; // delete property
   newUser.name = user.name.toLowerCase(); // updating property
   return newUser; // a new array
});
console.log(formattedUsers);
console.log(users);
