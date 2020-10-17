const holidays = [
   ["Holiday", "Date", "Is a federal holiday?"],
   ["New Year's Day", 20200101, true],
   ["Martin Luther King, Jr. Day", 20200120, true],
   ["Mike's Birthday", 20200421, false],
   ["Memorial Day", 20200525, true],
   ["Independence Day", 20200704, true],
   ["Labor Day", 20200907, true],
   ["Veterans Day", 20201111, true],
   ["Thanksgiving Day", 20201126, true],
   ["Christmas Day", 20201225, true],
];
// create a list of only federal holidays
let federalHolidays = [];
// [] + [`holiday`, `Date`, `Is a federal holiday?`] + [`New Year's Day`, 20200101, true]
// if i start at 0, run it 10 times, increment by 1
for (let i = 0; i < holidays.length; i++) {
   // console.log(holidays[i]); //i will input the array
   // if it is a fedreal holiday...
   const holiday = holidays[i];
   const isFederalHoliday = holiday[2]; //true or false

   if (isFederalHoliday === true) {
      //boolean = true === boolean &&
      federalHolidays = federalHolidays.concat(holiday); //break each array into its own space
   }
}
//console.log(federalHolidays);

// create a list of holiday dates; only the dates from holidays
const holidayValues = holidays.flat();
// console.log(holidayValues);
let holidayDates = [];
for (let i = 0; i < holidayValues.length; i++) {
   const value = holidayValues[i];
   // if the value is a number, concat it with holidayDates
   if (typeof value === `number`) {
      const numAsString = string(numAsString);
      holidayDates = holidayDates.concat(numAsString);
   }
   // else, nothing. skip it.
   //"New Year's Day", 20200101, true + "Memorial Day", 20200525, true
}
console.log(holidayDates);
