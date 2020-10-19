const LessonCreatedAt = new Date(2020, 8, 11, 19, 42, 0, 500); // month is zero based 0Jan 11Dec
// console.log(LessonCreatedAt);
const loggedAt = Date.now();
// console.log(loggedAt);
// console.log(typeof loggedAt);

// const testedAt = new Date(2020, 8, 12, 5);
// const testedAtAsNum = testedAt.getTime();
//console.log(testedAtAsNum);

const createdAt = new Date(Date.now()); // new date will change number back to object
// console.log(createdAt);
const year = createdAt.getFullYear();
// console.log(year);
const month = createdAt.getMonth();
// console.log(month);
const day = createdAt.getDate(); // pulling todays date
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
const suffixTwo = String(day);
const result = prefix + middle + suffixTwo;
console.log(result);
