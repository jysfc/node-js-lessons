// every and some will look at conditions and returning true and false

const users = [
   {
      name: "Mike",
      isActive: true,
      createdAt: 1601234512420,
      socialProfiles: [
         {
            site: "twitter",
            username: "mzetlow",
         },
         {
            site: "facebook",
            username: "fbmikezetlow",
            profilePhoto: {
               sm: "small.jpg",
               lg: "large.jpg",
            },
         },
      ],
   },
   {
      name: "John",
      isActive: true,
      createdAt: 1601234512430,
      socialProfiles: [
         {
            site: "facebook",
            username: "fbjsmith",
            profilePhoto: {
               sm: "small.jpg",
               lg: "large.jpg",
            },
         },
      ],
   },
   {
      name: "Michelle",
      isActive: false,
      createdAt: 1601234512450,
      socialProfiles: [
         {
            site: "twitter",
            username: "michelledoe",
         },
      ],
   },
];
//EVERY (looking for the first false)
// everything that pass this condition will return true, if it doesnt pass = false
const isEveryUserOnFb = users.every((user) => {
   // go through all the social profiles
   const siteNames = user.socialProfiles.map((profile) => {
      return profile.site; // turning obj to str
   });
   return siteNames.includes(`facebook`);
   // if site === facebook,
   //    if (siteNames.includes(`facebook`)) {
   //       return true;
   //    } else {
   //       return false;
   //    }
   // this user is on facebook, so return true
   // else return false
});

console.log(`Is every user on fb?`, isEveryUserOnFb);

//SOME (looking for the first true)
const hasGithubUsers = users.some((user) => {
   const siteNames = user.socialProfiles.map((profile) => {
      return profile.site;
   });
   return siteNames.includes(`github`);
});

console.log(`Do we have any Github users?`, hasGithubUsers);
