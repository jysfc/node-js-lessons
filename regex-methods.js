const phonePattern = /^\(\d{3}\)\s\d{3}-\d{4}$/;
const userInput = "(517) 555-1234";
const isValidPhone = phonePattern.test(userInput);
// console.log(isValidPhone);

// validate pw pattern = /^[a-zA-Z0-9_!#/\\-]{9,}$/gm
// validate URL = /https?:\/\/www\.[a-zA-Z0-9][\w-]+\.[a-zA-Z]{2,}/gm

// validate email pattern = /^\w+.*@[a-zA-Z0-9][\w-]+\.[a-zA-Z]{2,}$/gm

// regex to match pattern to split out all the tags to get text as arr of str
const scrapedHtmlText = "<h1>Hello World</h1><p>This is my first webpage</p>";
const tagPattern = /<.*?>/; // get from regex. added ? to make it not greedy.
const htmlStrings = scrapedHtmlText.split(tagPattern);
// to remove spaces
// console.log(
//    htmlStrings.filter((str) => {
//       return str !== "";
//    })
// );

//replace
const h1Pattern = /h1/g;
editedHtmlText = scrapedHtmlText.replace(h1Pattern, "p");
// console.log(editedHtmlText);

//search is like findindex
const sentence = "The quick brown fox jumps over the lazy dog.";
const wordPattern = /b/g; //mike isnt there so its -1, if we had b it will locate b from brown (10)
const firstWordIndex = sentence.search(wordPattern);

console.log(firstWordIndex);
