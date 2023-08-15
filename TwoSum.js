//GUven an array of integers [ nums ] and an integer [ target ]. return indices such thet they add up to target.
/*
example 1 :
Input: nums [2,7,11,15] , target  = 9 
output: [0,1] nums[0]+nums[1]=target 
we return [ 0 , 1]

example 2 :
Input: nums [3 , 2 , 4] , target  = 6 

example 3 :
Input: nums [3 , 3 ] , target  = 6
*/


// method 1 :
var twoSum = function (nums , target){
  console.log(target);
  console.log(nums.length);
  for ( let i = 0 ; i < nums.length  ; i++){
    for ( let j = i + 1  ; j < nums.length ; j++){
      if(nums[i] + nums[j] == target){
        console.log( `first index ${i} , second index ${j}...`);
        return[ i , j ];
      }
    }
  }
// }

// twoSum( [2,7,11,15] , 26);
// twoSum( [3 , 2 , 4] , 6);
// twoSum( [3 , 3 ] , 6);

// method 2 --->

var twoSum = function (nums , target){
  const obj = {};

  for ( let i = 0 ; i < nums.length ; i++){
    const res = target - nums[i];
    if(Object.keys(obj).includes(String(nums[i]))){
      console.log(`first index ${i} , second index ${obj[nums[i]]}...`)
      return [ i , obj[nums[i]]];
    }
    else{
      obj[res] = i ;
    }
  }
}

twoSum( [2,7,11,15] , 26);
twoSum( [3 , 2 , 4] , 6);
twoSum( [3 , 3 ] , 6);

