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
   `New Year’s Day (January 1)`,
   `Birthday of Martin Luther King, Jr. (Third Monday in January)`,
   `Washington’s Birthday (Third Monday in February)`,
   `Memorial Day (Last Monday in May)`,
   `Independence Day (July 4)`,
   `Labor Day (First Monday in September)`,
   `Columbus Day (Second Monday in October)`,
];

const newHolidaysFromHr = [
   //arr of arr
   [`Veterans Day (November 11)`, 2020, `Megan`],
   [`Thanksgiving Day (Fourth Thursday in November)`, 2020, `Megan`],
   [`Christmas Day (December 25)`, 2020, `Megan`],
];

const firstDay = holidays[0];
// console.log(`The first day in this array is ${firstDay}.`);
const holidaysArrLength = holidays.length; //length is not zero based
// console.log(`The length of this array is ${holidaysArrLength}.`);
const lastDay = holidays[holidaysArrLength - 1];
// console.log(`The last day in this array is ${lastDay}.`);

const favoriteHoliday = `Independence Day (July 4)`;
const indexOfIndependenceDay = holidays.indexOf(favoriteHoliday); //list first index of element given
// console.log(
//    `${favoriteHoliday} is found at the ${indexOfIndependenceDay} of the holidays array.`
// );

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
   // console.log(
   //    `Yes, ${specificHoliday} is a holiday. It was found at the ${holidays.indexOf(
   //       specificHoliday
   //    )} index in the list of holidays.`
   // );
} else {
   //console.log(`No, ${specificHoliday} is not a holiday.`);
}

// find element and replace with (need index to change element in array)
const replaceableHoliday = `Washington’s Birthday (Third Monday in February)`;
const indexOfReplaceableHoliday = holidays.indexOf(replaceableHoliday);
// console.log(
//    `We are going to replace ${replaceableHoliday} at the ${indexOfReplaceableHoliday} index of the holiays list.`
// );

// creating new list (array) by adding ... or Array.from
// spread ops https://www.samanthaming.com/tidbits/35-es6-way-to-clone-an-array/
const newHolidays = [...holidays];
newHolidays[indexOfReplaceableHoliday] = specificHoliday;
// console.log(`Here's a list of our old holidays: `, holidays);
console.log(`Here's a list of our new holidays: `, newHolidays);
console.log(`Here's a list of our new holidays from HR: `, newHolidaysFromHr);

// const allHolidays = newHolidays.concat(newHolidaysFromHr); // combining two array by concat
const allHolidays = [...newHolidays, ...newHolidaysFromHr]; // spread syntax
console.log(`Here's a list of all holidays: `, allHolidays);
const allFlatHolidays = allHolidays.flat(); // removing subarrays
console.log(`Here's a list of all holidays, but flat: `, allFlatHolidays);

const allUniqHolidays = [...new Set(allFlatHolidays)]; // giving only uniq values (no dupe), adding ... spread
console.log(`Here's a list of all UNIQUE holidays: `, allUniqHolidays);

const firstHolidays = allUniqHolidays.slice(0, allUniqHolidays.indexOf(2020)); // cutting off list
console.log(`Here are the first holidays:\n`, firstHolidays);
const secondHolidays = allUniqHolidays.slice(
   allUniqHolidays.indexOf(`Thanksgiving Day (Fourth Thursday in November)`)
);
console.log(`Here are the second holidays:\n`, secondHolidays);

const allCleanedUpHolidays = firstHolidays.concat(secondHolidays);
console.log(
   `At long last, here is the final list of holidays:\n`,
   allCleanedUpHolidays
);
