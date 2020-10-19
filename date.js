const LessonCreatedAt = new Date(2020, 8, 9, 19, 42, 0, 500); // month is zero based 0Jan 11Dec
// console.log(LessonCreatedAt);
const loggedAt = Date.now();
// console.log(loggedAt);
// console.log(typeof loggedAt);

// const testedAt = new Date(2020, 8, 12, 5);
// const testedAtAsNum = testedAt.getTime();
//console.log(testedAtAsNum);

const createdAt = new Date(Date.now()); // new date will change number back to object
// console.log(createdAt);
const year = LessonCreatedAt.getFullYear();
// console.log(year);
const month = LessonCreatedAt.getMonth();
console.log(month);
const day = LessonCreatedAt.getDate(); // pulling todays date
console.log(day);
const hour = createdAt.getHours();
// console.log(hour);
const minutes = createdAt.getMinutes();
// console.log(minutes);
const seconds = createdAt.getSeconds();
// console.log(seconds);
const milliseconds = createdAt.getMilliseconds();
// console.log(milliseconds);

// 20200911

const prefix = String(year); // convert object to string so we can combine
const middle = String(month + 1);
const suffix = String(day);

// if month length is single digit
if (middle.length < 2) {
   // add a 0 in front
   paddedMonth = `0` + middle;
}

if (suffix.length < 2) {
   paddedDate = `0` + suffix;
}

const result = prefix + paddedMonth + paddedDate;
console.log(result);
