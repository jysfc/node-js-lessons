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

const fbUsers = users
   .map((user) => {
      // name * fb name only
      const newUser = {
         name: user.name,
         fbName: getFbNameUsingFP(user),
      };
      return newUser;
   })
   .filter((user) => {
      //only return users with a fb account
      return user.fbName !== "";
   });

console.log(fbUsers);

function getFbName(user) {
   // return FB name if they have one
   // if they don't return empty string: ""
   let fbName = "";
   user.socialProfiles.forEach((profile) => {
      if (profile.site === "facebook") {
         fbName = profile.username;
      }
   });
   return fbName;
}

function getFbNameUsingFP(user) {
   const fbProfiles = user.socialProfiles.filter((profile) => {
      return profile.site === "facebook";
   });

   if (fbProfiles.length > 0) {
      return fbProfiles[0].username;
   }
   return "";
}
