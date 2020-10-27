// Given a number (4),
// Pad it with zeroes, n amount of times (up to 3 chars)

// 4 => 004 //fat arrow,
// 40 => 040
// 400 => 400
// 4000 => 4000 (or return an error, saying the number exceeds the padding)

// num will add, str will cascade
function padLeft(num, width, char) {
   // width should be the total width of the completed string
   // A width of 4 is 0006 and 0060 and 0600 for example.
   const numAsStr = String(num); //convert num to str to add zeros
   let padding = ``;
   for (let i = 0; i < width; i++) {
      padding += char;
   }
   console.log(`Padding: ${padding}`);
   // console.log("pizza".slice(-4)); // when slice is given a negative num, add that negative num to the string length, and that's where the slice starts.
   const concattedStr = padding + numAsStr; // 000000 + 6

   if (numAsStr.length >= width) {
      console.log(`${numAsStr.length} is >= the width of ${width}`); // to make sure data isnt cut off
      return numAsStr; // return a string
   }

   const slicedStr = concattedStr.slice(-width);
   return slicedStr; // returns a sliced string
}

const num = 20000;
const paddedNum = padLeft(num, 3, `0`); // paddednum is always a str, num cant have 0 in front of them
console.log("Here is your padded num: ", paddedNum);

const numAsStr = String(num);
const newPaddedNum = numAsStr.padStart(3, `0`);
console.log("Here is your NEW padded num: ", newPaddedNum);
console.log(paddedNum + newPaddedNum);
