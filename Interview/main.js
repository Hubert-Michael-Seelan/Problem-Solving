// function MissingNum(arr){
//   let min = MinNum(arr)
//   let max = MaxNum(arr)
//   let missingNums = []
//   for(let i = min + 1; i < max; i++){
//     if(!arr.includes(i)){
//       missingNums.push(i)
//     }
//   }
//   return missingNums
// }
// function MinNum(arr){
//   let minNum = arr[0];
//   for(let i = 0; i < arr.length; i++){
//     if( minNum > arr[i]){
//       minNum = arr[i]
//     }
//   }
//   return minNum;
// }
// function MaxNum(arr){
//   let maxNum = arr[0];
//   for(let i = 0; i < arr.length; i++){
//     if( maxNum < arr[i]){
//       maxNum = arr[i]
//     }
//   }
//   return maxNum;
// }
// let arr = [1, 4, 5, 6, 9]
// console.log(MissingNum(arr))

// function Total(number){
//   let sum = 0
//   while(number > 0){
//     let remainder = number % 10;
//     number = Math.floor(number / 10);
//     sum = remainder + sum;
//   }
//   return sum;
// }
// console.log(Total(234556321)); // 31

// function FindValue(nums){
//   let product = nums.reduce((prev, cuv) => prev * cuv, 1)
//   let resultNums = [];
//   for(let i = 0; i < nums.length; i++){
//     resultNums.push(product / nums[i])
//   }
//   console.log(resultNums)
// }

// let nums = [1, 2, 3, 4]; // [24, 12, 8, 6]
// FindValue(nums)

