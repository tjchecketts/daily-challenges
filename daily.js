// DONE
// Given a list of numbers and a number k, return whether any two numbers from the list add up to k.
// For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.
// Bonus: Can you do this in one pass?

let sumBool = (arr, num) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] + arr[j] === num) return true;
    }
  }
}

let givenList = [1, 2, 3];
let givenK = 7;
sumBool(givenList, givenK);




// number of steps, x. array of total options
// let stepPermutations = [];
// let stepFigureOuter = (totalSteps) => {
//   if (totalSteps === 1) {
//     return 1;
//   }
// }




// DONE
// Find the minimum number of coins required to make n cents.
// You can use standard American denominations, that is, 1¢, 5¢, 10¢, and 25¢.
// For example, given n = 16, return 3 since we can make it with a 10¢, a 5¢, and a 1¢

// if remainder of 25 is 0, add up quarters and subtract from total, continue with each coin amount, return coin counts when total cents remaining is 0

// let quarterCount = 0;
// let dimeCount = 0;
// let nickelCount = 0;
// let pennyCount = 0;

// let minCoinCounter = (cents) => {
//   // if no cents passed or is not number, return not a cent amount
//   if (typeof cents !== 'number' || cents < 0) {
//     console.log('you must provide a positive integer please :)');
//     return;
//   }

//   // when 0 cents remaining, then return total coin counts
//   if (cents === 0) {
//     let totalCoins = quarterCount + dimeCount + nickelCount + pennyCount;
//     console.log('quarters::: ', quarterCount);
//     console.log('dimes::: ', dimeCount);
//     console.log('nickels::: ', nickelCount);
//     console.log('pennies::: ', pennyCount);
//     console.log('TOTAL COINS::: ', totalCoins);
//     return totalCoins;
//   }

//   // if 25 or greater, add to quarters count and decrease cents
//   // repreat for each coin amount
//   if (cents >= 25) {
//     quarterCount++;
//     cents -= 25;
//   } else if (cents >= 10) {
//     dimeCount++;
//     cents -= 10;
//   } else if (cents >= 5) {
//     nickelCount++;
//     cents -= 5;
//   } else {
//     pennyCount++;
//     cents -= 1;
//   }

//   return minCoinCounter(cents);
// }

// minCoinCounter(74);