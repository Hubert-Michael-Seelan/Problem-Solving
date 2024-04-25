// Find the Missing Number
// let nums = [1, 5, 6, 8, 10];
// let min = Math.min(...nums);
// let max = Math.max(...nums);
// let missNums = [];
// for (let i = min + 1; i < max; i++) {
//   if (!nums.includes(i)) {
//     missNums.push(i);
//   }
// }
// console.log(missNums);

// // Find Factorial Number
// let n = 5;
// if (n === 0 || n === 1) {
//   console.log("Factorial is: 1");
// } else {
//   let fact = 1;
//   for (let i = 2; i <= n; i++) {
//     fact *= i;
//   }
//   console.log(`Factorial is: ${fact}`);
// }

/* You are given a number A in Kilometers. Convert this into B: Meters and C: Centi-Metres. */
// let A = 5;
// let B = A * 1000;
// let C = B * 100;
// console.log(`Metre: ${B}`);
// console.log(`Centi-Metre: ${C}`);

// Find total Number
// let x = [125];
// let splX = x.toString().split("");
/* for loop method
// let n = splX.length;
// let sum = 0;
// for(let i = 0; i < n; i++){
//   sum += parseInt(splX[i]); 
// } */
/* reduce method
let sum = splX.reduce((acc, cuv)=> acc + parseInt(cuv), 0);
console.log(sum); */

// Capitalize the first letter
// let str = ["hi hubeRt"];
// let splStr = str[0].toLowerCase().split(" ");
// for loop method
// let capStr = [];
// for(let i = 0; i < splStr.length; i++){
//   let word = splStr[i];
//   capStr.push(word.charAt(0).toUpperCase() + word.slice(1))
// }
// map method
// let capStr = splStr.map((word)=> word.charAt(0).toUpperCase() + word.slice(1))
// console.log(capStr.join(" "));

// sort method using for loop
// let nums = [3, 5, 2, 6, 1, 8];
// let len = nums.length;
// let ascNum = [];
// for (let i = 0; i < len - 1; i++) {
//     for (let j = 0; j < len - i - 1; j++) {
//         if (nums[j] > nums[j + 1]) {
//             let temp = nums[j];
//             nums[j] = nums[j + 1];
//             nums[j + 1] = temp;
//         }
//     } 
// }
// ascNum.push(...nums);
// console.log(nums); 