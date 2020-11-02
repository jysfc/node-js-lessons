// filter return an array looking for true and false

const users = [
   { name: "Mike", isActive: true, createdAt: 1601234512420 },
   { name: "John", isActive: true, createdAt: 1601234512430 },
   { name: "Michelle", isActive: false, createdAt: 1601234512450 },
];

//filter is like boolean, true & false, true will be added to the new list, false will not
const mostRecentUsers = users.filter((user) => {
   return user.createdAt >= 1601234512430;
});

console.log(mostRecentUsers);

// another way to write it;
// const mostRecentUsers = users.filter((user) => {
//    if (user.createdAt >= 1601234512430) {
//       return true;
//    } else {
//       return false;
//    }
// });
