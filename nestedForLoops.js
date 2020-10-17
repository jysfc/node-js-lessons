const users = [
   // data from excel 3 rows, 4 columns
   [`MIKE`, `ZETLOW`, `MIKE@gmail.com`, `met him at Demo Day`],
   [`John`, `John@gmail.com`],
   [20200921, `sue`],
];

// Please provide normalized data for each user field (everything lower cased)
// Please keep in their original rows

let normalizedUsers = [];

for (let i = 0; i < users.length; i++) {
   // run data 3 times
   const userFields = users[i];
   let newUserFields = [];
   // console.log(users); // user[0], user[1], user[2] #=column
   for (let i2 = 0; i2 < userFields.length; i2++) {
      const userField = String(userFields[i2]); //adding string() converts everything to string
      const lowerCasedField = userField.toLowerCase();
      newUserFields = newUserFields.concat(lowerCasedField);
   }
   normalizedUsers = normalizedUsers.concat([newUserFields]);
}

console.log(normalizedUsers);
