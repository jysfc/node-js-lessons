const users = [
   // data from excel
   [`Mike`, `Zetlow`, `mike@gmail.com`],
   [`John`, `Smith`, `john@gmail.com`],
   [`Sue`, `Smith`, `sue@gmail.com`],
];

// Please provide a list of email address for our mailing list

const emails = [];

for (let i = 0; i < users.length; i++) {
   console.log(users[i]); // user[0], user[1], user[2]
}

console.log(users[2]);
