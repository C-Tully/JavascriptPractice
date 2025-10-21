/**
 * 
 * It will have one candle for each year of their total age. 
 * They will only be able to blow out the tallest of the candles. 
 * Your task is to count how many candles are the tallest.
 * 
 * Input will be an array of candles heights [];


 * 
 */

//input [3 2 1 3]
function birthdayCakeCandles(candles) {
  // Write your code here
  const max = Math.max(...candles); //biggested value in the array
  const count = candles.reduce((a, max) => (max === val ? a + 1 : a), 0);

  console.log(count);
}
