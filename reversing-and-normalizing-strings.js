//reversing
const todaysDate = `2020-09-11`;

// split at separator then return as array
const dateParts = todaysDate.split(`-`);
// console.log(dateParts);
const year = dateParts[0];
const month = dateParts[1];
const day = dateParts[2];
// console.log(year, month, day);

const greeting = `hello`;
const greetingChars = greeting.split(``); // split turn string to array
// console.log(greetingChars);
const copyOfGreetingChars = [...greetingChars]; // reversing the reverse (back to original)
const reverseGreetingChars = copyOfGreetingChars.reverse();
// console.log(`Reversed chars: `, reverseGreetingChars);
// console.log(`Original chars: `, greetingChars);
const newGreeting = reverseGreetingChars.join(``); // join turn array to string
// console.log(`Here's our new greeting: ${newGreeting}`);

//normalizing & trim
const query = `                   GOOGLE FONTS      `;
const dbEntries = [`Google Fonts            `, `Google Maps`]; // db = database
// const dbEntry = dbEntries[0];
// const lowerCaseDbEntry = dbEntry.toLowerCase(); // google fonts
// console.log(lowerCaseDbEntry)
// const trimmedDbEntry = lowerCaseDbEntry.trim(); // trim white space
// console.log(trimmedDbEntry)
const isInDb = query.toLowerCase().trim() === dbEntries[0].toLowerCase().trim(); // replace trimmedDbEntry to shorten code
if (isInDb) {
   console.log(`We found a result!`);
} else {
   console.log(`Sorry, couldn't find anything for ${query}`);
}
