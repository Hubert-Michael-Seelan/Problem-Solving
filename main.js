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

// Find Factorial Number
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
// for(let i = splStr.length; i >=0; i--){
//   revStr.push(splStr[i]);
// }
// console.log(revStr.join(""));

// let nums = [ 3, 5, 8, 12, 2, 4, 6, 45, 50, 45, 3, 5, 2];
// nums.sort((a, b) => a - b)
// let uniqueNums = [];
// let uniqueNums = [...new Set(nums)]
// for(let i = 0; i < nums.length; i++){
//   console.log(uniqueNums.indexOf(nums))
//   if(uniqueNums.indexOf(nums[i])=== - 1){
//     uniqueNums.push(nums[i])
//   }
// }
// console.log(uniqueNums);
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

// Problem Solving
// Sorted Nums
// let nums = [123, 2, 53, 23, 54, 25, 22, 556, 21];
// let len = nums.length;
// let temp = [];
// for(let i = 0; i < len; i++){
//   let min = nums[0];
//   let minInd = 0
//   for(let j = 0; j < len; j++){
//     if(min > nums[j]){
//       min = nums[j];
//       minInd = j;
//     }
//   }
//   temp.push(min)
//   nums[minInd] = +Infinity;
// }
// console.log(...temp);
// let nums = Array.from({length: 10}, ()=> Math.floor(Math.random() * 100));
// console.log(...nums);

// Prime Number
// function isPrime(number){
//   let count = 1;
//   if(number < 2) return [count, false]
//   if(number === 2) return [count, true];
//   if(number % 2 === 0){
//     return [count, false];
//   }
//   for(let i = 3; i * i <= number; i += 2){
//     count++;
//     if(number % i === 0){
//       return [count, false]
//     }
//   }
//   return [count, true]
// }
// console.log(isPrime(1000000007));
// console.log(isPrime(5));
// console.log(isPrime(11));
// let nums = Array.from({length:10},()=> Math.floor(Math.random() * 100))
// let nums = [3, 2, 4, 5, 7, 6, 23, 234]
// // console.log(nums);
// let primeNums = [];
// for(let i = 0; i < nums.length; i++){
//   if(isPrime(nums[i])[1]){
//     primeNums.push(nums[i])
//   }
// }
// console.log(primeNums);

// let arr1 = [12, 4, 43, 121, 321, 323, 223, 456];
// let arr2 = [1, 5, 6, 3, 5, 3, 2, 4];
// let arr3 = arr1.concat(arr2);
// arr3.sort((a, b) => a - b);
// let uniqueNums = [...new Set(arr3)]
// console.log(uniqueNums);

// function factorial(n){
//   if(n < 2) return 1;
//   return  n * factorial(n -1);
// }
// console.log(factorial(5))

// function power(num1 , num2){
//   if(num2 === 0) return 1;
//   if(num2 === 1) return num1
//   return num1 * power(num1, num2 -1)
// }
// console.log(power(2 , 5))

// let nums = [3, 5, 8, 12, 2, 4, 6, 45, 50, 45, 3, 5, 2];
// nums.sort((a , b)=> a - b);
// let uniqueNums = [...new Set(nums)]
// console.log(uniqueNums)
// let min = Math.min(...nums);
// let max = Math.max(...nums);
// let missNums = [];
// for(let i = min + 1; i < max; i++){
//   if(!nums.includes(i)){
//     missNums.push(i)
//   }
// }
// console.log(missNums);

// function removeDuplicates(list) {
//   list.sort((a, b) => a - b);
//   let uniqueNums = [...new Set(list)];
//   console.log(uniqueNums);
// }
// removeDuplicates([1, 3, 4, 3, 4, 5, 7, 3]);

// function largestNum(list){
//   let max = Math.max(...list);
//   console.log(max);
// }
// largestNum([1, 45, 23, 59302, 82938, 223, 22345]);

// function firstNonRepeating(arr) {
//   const counts = new Map();
//   arr.forEach(num => {
//       counts.set(num, (counts.get(num) || 0) + 1);
//   });
//   for (let num of arr) {
//       if (counts.get(num) === 1) {
//           return num;
//       }
//   }
//   return undefined;
// }

// function findLargestNumber(arr) {
//   if (arr.length === 0) {
//       throw new Error("Array is empty");
//   }

//   let max = arr[0];

//   for (let i = 1; i < arr.length; i++) {
//       if (arr[i] > max) {
//           max = arr[i];
//       }
//   }

//   return max;
// }

// // Example usage:
// const numbers = [3, 5, 7, 2, 8, -1, 4, 10, 12];
// const largestNumber = findLargestNumber(numbers);
// console.log(largestNumber); // Output: 12

// function largestNum(arr) {
//   let max = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     if (max < arr[i]) {
//       max = arr[i];
//     }
//   }
//   return max;
// }

// console.log(largestNum([2, 42, 13, 23, 1, 3, 24]));

// function smallestNum(arr) {
//   let min = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     if (min > arr[i]) {
//       min = arr[i];
//     }
//   }
//   return min;
// }

// console.log(smallestNum([2, 42, 13, 23, 1, 3, 24]));

// Duplicating Numbers and Concating
// let  A1= [1, 2, 3, 4, 1, 2, 3, 4 ]
// let A2= [5, 6, 7, 8]
// let mergeArr = A1.concat(A2);
// let removeDuplicates = [];
// let removeDuplicates = [...new Set(mergeArr)]
// for(let i = 0; i < mergeArr.length; i++){
//   if(removeDuplicates.indexOf(mergeArr[i])=== -1){
//     removeDuplicates.push(mergeArr[i])
//   }
// }

// console.log(removeDuplicates);

// Find Common Element
// function commonElements(arr1, arr2){
//   let result = [];
//   for(let i = 0; i < arr1.length; i++){
//     for(let j = 0; j < arr2.length; j++){
//       if(arr1[i] === arr2[j]){
//         if(!result.includes(arr1[i])){
//          result.push(arr1[i])
//         }
//         break;
//       }
//     }
//   }
//   return result;
// }

// console.log(commonElements([1, 3, 4, 6, 7, 9], [-1, 3]))
// console.log(commonElements([1, 3, 4, 6, 7, 9], [1, 2, 3, 4, 7, 10]))
// console.log(commonElements([1, 2, 2, 2, 3, 4, 5], [1, 2, 4, 5]))
// console.log(commonElements([1, 2, 3, 4, 5], [10, 12, 13, 15]))

// Object Capitalize Keys
// let name = {
//   john : "and",
//   with : "the@"
// }
// let splitKey = Object.keys(name);
// let caps = splitKey.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
// let changedName = {};
// caps.forEach((key, value) => {
//   changedName[key] = name[splitKey[value]]
// });
// console.log(changedName);

// let name = {
//   john : "and",
//   with : "the@"
// }
// let caps = Object.keys(name);
// let changedName = {};
// caps.forEach((key) => {
//   changedName[key] = name[key].charAt(0).toUpperCase() + name[key].slice(1);
// });
// console.log(changedName);

// let name = {
//   john: "and",
//   with: "the@",
// };
// let splitKey = Object.keys(name);
// let changedName = {};
// splitKey.forEach((key) => {
//   let capKey = key.charAt(0).toUpperCase() + key.slice(1);
//   let capValue = name[key].charAt(0).toUpperCase() + name[key].slice(1);
//   changedName[capKey] = capValue;
// });
// console.log(changedName);

// function commonElements(arr1, arr2){
//   let result = [];
//   for(let i = 0; i < arr1.length; i++){
//     for(let j = 0; j < arr2.length; j++){
//       if(arr1[i] === arr2[j]){
//         if(!result.includes(arr1[i])){
//           result.push(arr1[i])
//         }
//         break;
//       }
//     }
//   }
//   return result
// }

// console.log(commonElements([1, 3, 4, 6, 7, 9], [1, 2, 3, 4, 7, 10]))

// let n = [0, 1]
// let fibo = n.reduce((prev, curr) => prev + curr)
// console.log(fibo)

// Find Minimum and Maximum value in an Array
// let arr = Array.from({length : 10}, ()=> Math.floor(Math.random() * 100))
// console.log(arr)
// let min = arr[0];
// let max = arr[0];
// for(let i = 0; i <= arr.length; i++){
//   if(min > arr[i]){
//     min = arr[i]
//   }else if(max < arr[i]){
//     max = arr[i]
//   }
// }
// console.log("Minimum Value:", min,"Maximum Value:", max)

// Sum of Digits 
// let num = 157621262;
// let sum = 0;
// while(num > 0){
//   const rem = num % 10;
//   num = Math.floor(num / 10);
//   sum += rem;
// }
// console.log(sum)

// function fibo(n){
//   let prev = 0;
//   let curr = 1;
// for(let i = 2; i <= n; i++){
//   let next = prev + curr;
//   prev = curr;
//   curr = next;
//   console.log(curr) ;
// }

// }
// (fibo(10))

// Find Anagaram
// function isAnagram(str1, str2){
//   let split1 = str1.split("").sort()
//   let split2 = str2.split("").sort()
//   if(split1.join("") === split2.join("")){
//     return true;
//   }
//   return false
// }
// let str1 = "the eyes";
// let str2 = "they see";
// console.log(isAnagram(str1, str2))

// Star Problem
// let n = 5;
// for(let row = 0; row < n; row++){
//   let arr=[];
//   for(let col = 0; col < n; col++){
//     if(row == col || col >= n-1-row){
//       arr.push("*")
//     }else{
//       arr.push(" ")
//     }
//   }
//   console.log(...arr)
// }