// forEach is a side effect so would be a last resort
function getUserId(num) {
   return num;
}

function getUser(cb) {
   const userId = cb(Date.now());
   return {
      name: `mike`,
      id: userId,
   };
}
// run getuser to get the function of getuserid which will return num inputted
const user = getUser(getUserId);
// console.log(user);

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

for (let i = 0; i < users.length; i++) {
   const user = users[i];
   //    console.log(user.name);
}

// for every user, log name
// function without a name
users.forEach(function (user) {
   //    console.log(user.name);
});
// arrow function, executed
users.forEach((user) => {
   //    console.log(user.name);
});

// showing only active user

let activeUsers = [];

users.forEach((user) => {
   // condition to only show active (filter)
   if (user.isActive) {
      activeUsers = activeUsers.concat(user);
   }
});

// console.log(activeUsers);

// put a function inside, executed for result
users.forEach((user) => {
   // whatever you want to do
   // This is technically a side effect
});
