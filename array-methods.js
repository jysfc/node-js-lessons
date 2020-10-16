// arrays === lists
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// const days = [
//    `Sunday`,
//    `Monday`,
//    `Tuesday`,
//    `Wednesday`,
//    `Thursday`,
//    `Friday`,
//    `Saturday`,
// ];
//strings
//const name = `Mike`;
//const firstLetter = name[0];

// const firstDayOfTheWeek = days[0];
// console.log(`The first day in this array is ${firstDayOfTheWeek}.`);
// const daysArrLength = days.length; //length is not zero based
// console.log(`The length of this array is ${daysArrLength}.`);
// const lastDay = days[daysArrLength - 1]; //if we know how long the array is input it, if not use daysArrLength -1
// console.log(`The last day in this array is ${lastDay}.`);

const holidays = [
   `Wednesday, January 1 – New Year's Day`,
   `Monday, January 20 – Birthday of Martin Luther King, Jr.`,
   `Monday, February 17 – Washington's Birthday`,
   `Monday, May 25 – Memorial Day`,
   `Friday, July 4 – Independence Day`,
   `Monday, September 7 – Labor Day`,
   `Monday, October 12 – Columbus Day`,
];
const firstDay = holidays[0];
console.log(`The first day in this array is ${firstDay}.`);
const holidaysArrLength = holidays.length; //length is not zero based
console.log(`The length of this array is ${holidaysArrLength}.`);
const lastDay = holidays[holidaysArrLength - 1];
console.log(`The last day in this array is ${lastDay}.`);

const favoriteHoliday = `Friday, July 4 – Independence Day`;
const indexOfIndependenceDay = holidays.indexOf(favoriteHoliday); //list first index of element given
console.log(
   `${favoriteHoliday} is found at the ${indexOfIndependenceDay} of the holidays array.`
);

const specificHoliday = `Mike's Birthday (April 21)`;

// if (holidays.indexOf(specificHoliday) === -1) {
//    console.log(`No, ${specificHoliday} is not a holiday.`); //true
// } else {
//    console.log(
//       `Yes, ${specificHoliday} is a holiday. It was found at the ${holidays.indexOf(
//          specificHoliday
//       )} index in the list of holidays.`
//    ); //false
// }

// works the same with lastIndexOf() (search backwards, end to start)
if (holidays.includes(specificHoliday)) {
   console.log(
      `Yes, ${specificHoliday} is a holiday. It was found at the ${holidays.indexOf(
         specificHoliday
      )} index in the list of holidays.`
   );
} else {
   console.log(`No, ${specificHoliday} is not a holiday.`);
}

// find element and replace with (need index to change element in array)
const replaceableHoliday = `Monday, February 17 – Washington's Birthday`;
const indexOfReplaceableHoliday = holidays.indexOf(replaceableHoliday);
console.log(
   `We are going to replace ${replaceableHoliday} at the ${indexOfReplaceableHoliday} index of the holiays list.`
);

// creating new list (array) by adding ... or Array.from
// spread ops https://www.samanthaming.com/tidbits/35-es6-way-to-clone-an-array/
const newHolidays = ...(holidays);
newHolidays[indexOfReplaceableHoliday] = specificHoliday;
console.log(`Here's a list of our old holidays: `, holidays);
console.log(`Here's a list of our new holidays: `, newHolidays);
