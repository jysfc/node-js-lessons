const phonePattern = /^\(\d{3}\)\s\d{3}-\d{4}$/;
const userInput = "(517) 555-1234";
const isValidPhone = phonePattern.test(userInput);
// console.log(isValidPhone);

// validate pw pattern = ^[a-zA-Z0-9_!#/\\-]{9,}$
// validate URL = https?:\/\/www\.[a-zA-Z0-9][\w-]+\.[a-zA-Z]{2,}
