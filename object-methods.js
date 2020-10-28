const memoryCard = {
   answer: `The technical term for a hashtag is octothorpe.`,
   createdAt: 1603866698483,
   id: `c410dbc3-b1f1-46f8-a8fe-337d32ee0935`,
   imagery: `Jim Thorpe has octopus arms and is cooking hash browns.`,
   lastAttemptAt: 1603866721357,
   level: 1,
   nextAttemptAt: 1603866736499,
   totalSuccessfulAttempts: 1,
   userId: `1dade244-d1dd-42c0-b83b-19edc0ce3bdf`,
};

const keys = Object.keys(memoryCard); // array of str
console.log(keys);

const values = Object.values(memoryCard);
console.log(values);

const hasAnswerProp = memoryCard.hasOwnProperty(`answer`); // case sensitive
console.log(hasAnswerProp);

const hasFirstNameProp = memoryCard.hasOwnProperty("firstName"); //false
console.log(hasFirstNameProp);
