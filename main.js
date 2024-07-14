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
// let nums = [3, 5, 2, 6, 1, 8, 7];
// let len = nums.length;
// let ascNum = [];
// for (let i = 0; i < len; i++) {
//     for (let j = 0; j < len - i; j++) {
//         if (nums[j] > nums[j + 1]) {
//             let temp = nums[j];
//             nums[j] = nums[j + 1];
//             nums[j + 1] = temp;
//         }
//     }
// }
// // ascNum.push(...nums);
// console.log(nums);

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
// let A1= [1, 2, 3, 4, 1, 2, 3, 4 ]
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

// reverse numbers
// let arr = [1, 2, 3, 4, 5, 6];
// for(let start = 0 , end = arr.length-1; start<end; start++, end--){
//   arr[start] = arr[start] + arr[end]; // 1 + 6 = 7
//   arr[end] = arr[start] - arr[end]; // 7 - 6 = 1
//   arr[start] = arr[start] - arr[end]; // 7 - 1 = 6
// }
// console.log(arr)

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

// function fibo(n) {
//   let prev = 0;
//   let curr = 1;
//   for (let i = 2; i <= n; i++) {
//     let next = prev + curr;
//     prev = curr;
//     curr = next;
//     console.log(curr);
//   }
// }
// fibo(10);
// Recursive
// function Fibo(n){
//   if(n < 2) return n;
//   return Fibo(n - 1) + Fibo(n - 2);
// }
// console.log(Fibo(10))

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

// function Factorial(n){
//   if(n < 2) return 1;
//   let fact = 1;
//   for(let i = 2; i <= n; i++){
//     fact = i * fact
//   }
//   return fact
// }
// console.log(Factorial(5))

// function Factorial(n){
//   if(n < 2) return 1;
//   return n * Factorial(n - 1)
// }
// console.log(Factorial(5))

// find the value of power
// function power(x, y){
//   if(y===0) return 1;
//   if(y===1) return x;
//   return x * power(x, y-1)
// }
// console.log(power(2, 5))
// console.log(power(2, 3))

// function power(x, y){
//   if(y===0) return 1;
//   if(y===1) return x;
//   let pow = 1;
//   for(let i = 1; i<= y; i++){
//     pow *= x
//   }
//   return pow
// }
// console.log(power(2, 3))

// const num1= [1, 3, 2, 4, 5, 6, 4, 6, 3, 4, 3];
// const num2 = [ 3, 65, 2, 5, 5];
// let result = [];
// for(let i = 0; i < num1.length; i++){
//   for(let j = 0; j < num2.length; j++){
//     if(num1[i] === num2[j]){
//       if(!result.includes(num1[i])){
//         result.push(num1[i])
//       }
//     }
//   }
// }
// for(let i = 0; i < num1.length; i++){
//   if(result.indexOf(num1[i]) === -1){
//     result.push(num1[i])
//   }
// }
// console.log(result)

// const num1= [1, 3, 2, 4, 5, 6, 4, 6, 3, 4, 3];
// const num2 = [ 3, 65, 2, 5, 5];
// let result = [];
// for(let i = 0; i < num1.length; i++){
//   if(num1[i] === 3){
//     result.push([num1[i], i])
//   }
// }
// console.log(result)

// function linearSearch(arr, searchValue){
//    for(let i = 0; i < arr.length; i++){
//     if(arr[i] === searchValue){
//       return i;
//     }
//    }
//    return -1;
// }
// console.log(linearSearch([1, 2, 3, 4, 5, 6, 9], 3))
// console.log(linearSearch([1, 3, 3, 4, 5, 3, 6, 9], 10))
// console.log(linearSearch([1, 2, 3, 4, 5, 3, 6, 9], 9))

// function binarySearch(arr, searchValue){
//   let start = 0;
//   let end = arr.length - 1;

//   while (start <= end) {
//     let mid = Math.floor((start + end) / 2);
//     if(arr[mid] === searchValue){
//       return mid;
//     }
//     if(arr[mid] < searchValue){
//       start = mid + 1
//     }else{
//       end = mid - 1
//     }
//   }
//   return - 1;
// }
// console.log(binarySearch([1, 2, 3, 4, 5, 6, 9], 3))
// console.log(binarySearch([1, 3, 3, 4, 5, 3, 6, 9], 10))
// console.log(binarySearch([1, 2, 3, 4, 5, 3, 6, 9], 9))

// Bubble Sort using while loop
// function BubbleSort(arr){
//   let swapped = false;
//   do{
//     swapped = false;
//     for(let i = 0; i < arr.length; i++){
//       if(arr[i] > arr[i+1]){
//         swapped = true;
//         let temp = arr[i];
//         arr[i] = arr[i + 1];
//         arr[i+1] = temp;
//       }
//     }
//   }while (swapped)
//   return arr;
// }
// console.log(BubbleSort([1, 3, 5, 2, 4, 6, 8, 7, 10, 9]))

// Selection Sort using for loop
// function selectionSort(arr){
//   for(let ind = 0; ind < arr.length; ind++){
//     let minInd = ind;
//     for(let ind1 = ind + 1; ind1 < arr.length; ind1++){
//       if(arr[ind1] < arr[minInd]){
//         minInd = ind1;
//       }
//     }
//     if(minInd != ind){
//       arr[minInd] ^= arr[ind];
//       arr[ind] ^= arr[minInd];
//       arr[minInd] ^= arr[ind]
//     }
//   }
//   return arr;
// }
// let arr = [1, 3, 6, 7, 4, 5, 2];
// console.log(selectionSort(arr));

// let studentId = {
//   "name" : "Hubert Michael Seelan",
//   "age" : 24,
//   "address": {
//     street : "56/23, A3",
//     area : "Mylapore",
//     city : "Chennai",
//     state : "Tamil Nadu",
//     pincode : 600004
//   },
//   "birthYear" : function(getBirthYear){
//     return new Date().getFullYear() - this.age;
//   },
//   "getFullAddress" : function(getFullAddress){
//     let {street, area, city, state, pincode} = this.address;
//     return `${this.name} Address: ${street} - ${area}, ${city}, ${state} - ${pincode}`;
//   }
// }

// console.log(studentId.getBirthYear());
// console.log(studentId.getFullAddress())

// Find value
// let nums = [1, 2, 3, 4] // [24, 12, 8, 6]
// let result = [];
// let totalProduct = 1;
// for(let i = 0; i < nums.length; i++){
//   totalProduct *= nums[i]
// }
// for(let i = 0; i < nums.length; i++){
//   result.push(totalProduct / nums[i])
// }
// console.log(result)

// var merge = function(num1, m, num2, n){
//   let mergeArr = [];
//   for(let i = 0; i < m; i++){
//     mergeArr.push(num1[i])
//   }
//   for(let j = 0; j < n; j++){
//     mergeArr.push(num2[j])
//   }
//   return mergeArr.sort()
// }
// // merge([1,2,3,0,0,0], 3, [2,5,6], 3); // [1,2,2,3,5,6]
// console.log(merge([1,2,3,0,0,0], 3, [2,5,6], 3))

// var merge = function(num1, m, num2, n){
//   let mergeArr = num1.slice(0, m);
//       mergeArr = mergeArr.concat(num2.slice(0, n))
//   return mergeArr.sort()
// }
// // merge([1,2,3,0,0,0], 3, [2,5,6], 3); // [1,2,2,3,5,6]
// console.log(merge([1,2,3,0,0,0], 3, [2,5,6], 3))

// var romanToInt = function (s) {
//   const symbol = {
//     "I": 1,
//     "V": 5,
//     "X": 10,
//     "L": 50,
//     "C": 100,
//     "D": 500,
//     "M": 1000,
//   };
//   let total = 0;
//   for(let i = 0; i < s.length; i++){
//     let currVal = symbol[s[i]];
//     let nextVal = symbol[s[i+1]];
//     console.log(symbol[s[i]], symbol[s[i+1]])
//     if(nextVal > currVal){
//       total -= currVal;
//     }else{
//       total += currVal;
//     }
//   }
//   // console.log(total);
// };
// romanToInt("III");
// romanToInt("IV");

// MRF
// const nums = [1, 3, 4, 6, 2, 7, 8];
// let oddNums = [];
// let evenNums = [];
// nums.map((d) => {
//   if(d % 2 !== 0){
//     oddNums.push(d);
//   }else{
//     evenNums.push(d)
//   }
// });
// console.log(...nums.sort())
// console.log("Odd Numbers: ", ...oddNums.sort() , "Even Numbers: ", ...evenNums.sort());

// var longestCommonPrefix = function(strs) {
//   let compare = strs[0];
//     for(let i = 0; i < compare.length; i++){
//       for(let j = 1; j < strs.length; j++){
//         console.log(compare[i], strs[j])
//       }
//     }
// };
// longestCommonPrefix(["flower","flow","flight"]) //"fl"
// // longestCommonPrefix(["dog","racecar","car"]) //""

let arr1 = [1,2,3,4,5];

let rotateArr = arr1.slice(-2).concat(arr1.slice(0,3))
// let leftRotate = arr1.slice(2).concat(arr1.slice(0,2))
console.log(rotateArr); // [4,5,1,2,3]
function rotateArray(arr, direction, times) {
  const len = arr.length;
  console.log(len)
  if (len === 0) return arr;
  
  // times = times % len; // Effective rotations

  if (direction === 'right') {
    return arr.slice(-times).concat(arr.slice(0, len - times)); // 5 - 2 = 3
  } else if (direction === 'left') {
    return arr.slice(times).concat(arr.slice(0, times)); // 
  } else {
    throw new Error('Invalid direction');
  }
}

// Example usage:
let arr = [1, 2, 3, 4, 5];

let rotatedRight = rotateArray(arr, 'right', 2);
console.log(rotatedRight); // [4, 5, 1, 2, 3]

let rotatedLeft = rotateArray(arr, 'left', 2);
console.log(rotatedLeft); // [3, 4, 5, 1, 2]
