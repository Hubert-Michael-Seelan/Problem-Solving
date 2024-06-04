let arr = [1,2,3,4]
// [24,12,8,6]
let result = 1;

// let multiArr = arr.reduce((pvv, cuv)=> pvv * cuv)

for(let i = 0; i < arr.length; i++){
  result *= arr[i]
  
}

console.log(result)