// #1518 in leetcode

const numWaterBottles = (numBottles: number, numExchange: number) => {
  let totalDrunk = numBottles;
  let emptyBottles = numBottles;
  while (emptyBottles >= numExchange) {
    let newFull = Math.floor(emptyBottles / numExchange);
    totalDrunk += newFull;
    emptyBottles = (emptyBottles % numExchange) + newFull;
  }
  return totalDrunk;
};
console.log(numWaterBottles(15, 4));
