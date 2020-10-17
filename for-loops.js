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
let notFederalHolidays = [];
// [] + [`holiday`, `Date`, `Is a federal holiday?`] + [`New Year's Day`, 20200101, true]
// if i start at 0, run it 10 times, increment by 1
for (let i = 0; i < holidays.length; i++) {
   // console.log(holidays[i]); //i will input the array
   // if it is a fedreal holiday...
   const holiday = holidays[i];
   const isFederalHoliday = holiday[2]; //true or false
   if (isFederalHoliday === false) {
      notFederalHolidays = notFederalHolidays.concat([holidays[i]]); //break each array into its own space
   } else {
      // else do nothing, skip it...
   }
}
console.log(notFederalHolidays);
