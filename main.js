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
// console.log(ascNum); 

// Two Sum in LeetCode
// const twoSum = function(nums, target){
//   for(let i = 0; i < nums.length; i++){
//     for(let j = i + 1; j < nums.length; j++){
//       if(nums[i] + nums[j]===target){
//         let outPut = [i , j]
//         return outPut
//       }
//     }
//   }
// }
// console.log(twoSum([4, 6, 23, 2, 5, 3, 7], 30));

// Reverse the String
// let str = ["Hello World"];
// let splStr = str[0].split("")
// let revStr = [];
// for(let i = splStr.length -  1; i >=0; i--){
//   revStr.push(splStr[i]);
// }
// console.log(revStr.join(""));

let nums = [ 3, 5, 8, 12, 2, 4, 6, 45, 50];
nums.sort((a, b) => a - b)

// let len = nums.length;
// let ascNums = [];
// for(let i = 0; i < len - 1; i++){
//   for(let j = 0; j < len - i - 1; j++){
//     if(nums[j] > nums[j + 1]){
//       let temp = nums[j];
//       nums[j] = nums[j + 1]
//       nums[j+1] = temp;
//     }
//   }
// }

// console.log(nums);
// let missNums = [];
// let min = Math.min(...nums);
// let max = Math.max(...nums);
// for(let i = min + 1; i < max; i++){
//   if(!nums.includes(i)){
//     missNums.push(i)
//   }
// }
// console.log(missNums);
// let oddNums = [];
// let evenNums = [];
// for(let i = 0; i <= nums.length - 1; i++){
//   if(nums[i] % 2 === 0){
//     evenNums.push(nums[i])
//   }else{
//     oddNums.push(nums[i])
//   }
// }
// console.log(oddNums);
// console.log(evenNums);
// let n = 5;
// let factNum;
// if(n === 0 || n === 1){
//   console.log(1);
// }else{
//   let result = 1;
//   for(let i = 2; i <= n; i++){
//     result = i * result;
//   }
//   factNum = result;
// }
// console.log(factNum);
