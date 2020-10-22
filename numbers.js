const priceOfSquirtgun = 3.4; // number
const floorOfSquirtgun = Math.floor(priceOfSquirtgun); // floor is rounding down
// console.log(`The floor of this item is: ${floorOfSquirtgun}`);
const ceilOfSquirtgun = Math.ceil(priceOfSquirtgun); // ceiling is rounding up
// console.log(`The ceiling of this item is: ${ceilOfSquirtgun}`);
const roundedPrice = Math.round(priceOfSquirtgun); // round - rounding to the closest whole #, <.4 = down, >.5 = up
// console.log(`The rounded price of this item is: ${roundedPrice}`);
const smallestNum = Math.min(3, 5, 1); // pulling smallest number
// console.log(`The smallest number is: ${smallestNum}`);
const prices = [3.99, 7.99, 0.99]; // array
const lowestPrice = Math.min(...prices); // finding smallest number, adding ... to make it a number from an array
// console.log(`The lowest price is: ${lowestPrice}`);
const highestPrice = Math.max(...prices); // finding largest number
// console.log(`The highest price is: ${highestPrice}`);

//random will produce a random number 0-.99
// console.log(`Here is your random number: ${Math.random()}`);

// generating random# x (max-min)+min to get a number >1
function getRandomArbitrary(min, max) {
   return Math.random() * (max - min) + min;
}
const randomArbitraryNum = getRandomArbitrary(1, 16);
// console.log(`Here is your random arbitrary number: ${randomArbitraryNum}`);

function getRandomInt(min, max) {
   return Math.floor(Math.random() * (max + 1 - min) + min); // adding math.floor to get int (whole#), adding +1 to max will allow you to get all # listed
}

const randomInt = getRandomInt(1, 3);
// console.log(`Here is your random INTEGER: ${randomInt}`);

const weirdness = Math.round(55);

const isNaN = Number.isNaN(weirdness); // Not a Numnber boolean, run this to check if its a number
// console.log(`The weirdness is not a number: ${isNaN}`);

//const convertedNum = Number.parseFloat("3pizza"); // Number("3") parseFloat will find the number in the str
const convertedNum = Number("3.1419pizza"); // Number("3")
// console.log(convertedNum);

const priceOfCup = "3.2555";

function round(num, numOfDecPlaces) {
   const convertedNum = Number(num); // make sure num is a # by converting
   const roundedNumAsStr = convertedNum.toFixed(numOfDecPlaces); // toFixed will return a str, where round will return a number
   const convertedRoundedNum = Number(roundedNumAsStr);
   return convertedRoundedNum;
}

const roundedPriceOfCup = round(priceOfCup, 0);
console.log(roundedPriceOfCup);
