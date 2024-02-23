/*
1) Move Zeroes:
 
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
 
Example 1:
 
Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
*/

console.log(`===============================================Move Zeroes====================================================`)
let nums = [0,1,0,3,12]
let arr1 = []
let arr2 = []

for(let i=0;i<nums.length;i++){
    if(nums[i]==0){
        arr1.push(nums[i])
    }else{
        arr2.push(nums[i])
    }
}

let resultArr = arr2.concat(arr1)
console.log(resultArr)


/*  -----------------------------------------------------------------------------------------------------------------------------------------------------------------------
2) Array intersection
 
Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.
 
Example 1:
 
Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2]
 
Example 2:
 
Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [9,4]
Explanation: [4,9] is also accepted.
*/

console.log(`===============================================Array intersection====================================================`)
let nums1 = [4,9,5]
let nums2 = [9,4,9,8,4]
let intersection = []
let result = []

for(let i=0;i<nums1.length;i++){
    for(let j=0;j<nums2.length;j++){                   // to find the intersections
        if(nums1[i]==nums2[j])
        intersection.push(nums1[i])
    }
}

for(k=0;k<intersection.length;k++){
    if(intersection[k]!=intersection[k+1]){            //to remove the duplicates
        result.push(intersection[k])
    }
}
console.log(result)


/*  -------------------------------------------------------------------------------------------------------------------------------------------------------------------------
3) Find the maximum and minimum:

Given an integer array, find the maximum amd minimum elements in an array and return their indices.

Example: 
Input: nums = [34, 7, 21, 89, 54, 10, 91, 67]
Output: Maximum Element: 91, Index: 6
Minimum Element: 7, Index: 1
*/

/*
let numArr = [34, 7, 21, 89, 54, 10, 91, 67]
let maxVal = 0
let minVal = 0
let maxPos = 0
let minPos = 0

let sortedArray = sortNumbers(numArr);
//console.log(sortedArray);

function sortNumbers(arr) {
  return arr.sort((a, b) => a - b);
}

function minMax(){
    
    maxVal = sortedArray[sortedArray.length-1]
    minVal = sortedArray[0]
    console.log(maxVal)
    console.log(minVal)
    

}

function maxValuePosition(){
    for(let i=0;i<numArr.length;i++){
        if(numArr[i]==maxVal){
            maxPos=i
        }
    }
    console.log(maxPos)
}

function minValuePosition(){
    console.log(`inside mth ${minVal}`)
    console.log(numArr)
    for(let i=0;i<numArr.length;i++){
        if(numArr[i]==minVal){
            minPos=i
        }
    }
    console.log(minPos)
}


minMax()
maxValuePosition()
minValuePosition()
*/

console.log(`===============================================Find the maximum and minimum====================================================`)
let numArr = [34, 7, 21, 89, 54, 10, 91, 67]
let maxVal = 0
let minVal = 0
let maxPos = 0
let minPos = 0

function minMax(){
    maxVal = Math.max(...numArr)
    minVal = Math.min(...numArr)
}

function maxValuePosition(){
    for(let i=0;i<numArr.length;i++){
        if(numArr[i]==maxVal){
            maxPos=i
        }
    }
    console.log(`Maximum Element: ${maxVal}, Index: ${maxPos}`)
}

function minValuePosition(){
    for(let i=0;i<numArr.length;i++){
        if(numArr[i]==minVal){
            minPos=i
        }
    }
    console.log(`Minimum Element: ${minVal}, Index: ${minPos}`)
}


minMax()
maxValuePosition()
minValuePosition()


/* ---------------------------------------------------------------------------------------------------------------------------------------------------------------------
4) Remove Duplicates:

Given an integer array with duplicate elements as input, return a new array with duplicates 
elements removed. The order of the elements in the resulting array should be same as the order
in the original array.

Example: 
Input: inputArray = [1, 2, 3, 4, 2, 5, 6, 1, 6]
Output: resultArray = [1, 2, 3, 4, 5, 6]

*/

console.log(`===============================================Remove Duplicates====================================================`)
let inputArray = [1, 2, 3, 4, 2, 5, 6, 1, 6]
let noDuplicateArr = []

function noDuplicates(){
    for(let i=0;i<inputArray.length;i++){
        if(!noDuplicateArr.includes(inputArray[i])){
            noDuplicateArr.push(inputArray[i])
        }
    }
    console.log(noDuplicateArr)
}

noDuplicates()

/* -----------------------------------------------------------------------------------------------------------------------------------------------------------------------
1) Find the number of occurances.  

const nums = [2,4,5,2,1,2];
const k = 2
// output >> 3
*/

console.log(`===============================================Number of occurances====================================================`)
const numsInput = [2,4,5,2,1,2];
const c = 2
let occurances = 0

for(let i=0;i<numsInput.length;i++){
    if(numsInput[i]==c){
        occurances++
    }
}
console.log(`Number of occurances of ${c} is ${occurances}`)

/*
2) Two Sum 

const nums = [2,4,7,8,11,14]; // sort array !!
const target = 18;

return the indices that has matching target? 7+11 (2,4), 4+14 (1,5)

*/
console.log(`===============================================Two Sum====================================================`)

const given = [2,4,7,8,11,14]; // sort array !!
const target = 18;

for(let i=0; i<given.length;i++){
    for(let j=i+1;j<given.length;j++){
        if(given[i]+given[j]==target){
            console.log(`(${i},${j})`)
        }
    }
}