/*
Given a string s consisting of words and spaces, return the length of the last word in the string.
 
Example 1:
 
Input: s = "Hello World"
Output: 5
Explanation: The last word is "World" with length 5.
 
Example 2:
 
Input: s = "   fly me   to   the moon  "
Output: 4
Explanation: The last word is "moon" with length 4.
*/

let input = "   fly me   to   the moon  "

function lengthOfLastWord(){
    let indWordsArr = input.trim().split(" ")
    let arrLen=indWordsArr.length
    let lastWord = indWordsArr[arrLen-1]
    let lastWordLen = lastWord.length
    console.log(`The last word is "${lastWord}" with length ${lastWordLen}`)
}

lengthOfLastWord()


/*Example 3: 

Write a function to check if two strings are anagrams.

 Input: isAnagram('listen', 'silent')
 Output: true
 Input: isAnagram('hello', 'world') 
 Output: false
 Explanation: An anagram is when you mix up the letters of a word to make a new one, using all the letters.
 
*/

let input1='listen'
let input2='silent'
let count=0

function isAnagram(input1, input2){
    
    let arr1=input1.toUpperCase().split("")   //To make the string Uppercase and to covert it into an array
    let arr2=input2.toUpperCase().split("")
    
    let sortArr1=arr1.sort();                 //To sort the array in ascending
    let sortArr2=arr2.sort();
    
    for(let i=0;i<sortArr1.length;i++){
        if(sortArr1[i]==sortArr2[i]){         //To check if the values in both arrays are matched
            count++
        }   
    }
    if(count==sortArr1.length){
        console.log(`true`)
    }else{
        console.log(`false`)
    }
}

isAnagram(input1, input2)


/*
If the given string and reverse string is same --> palindrome

Objective: If the given string is palindrome

hints:

1) use the above logic to reverse the string
2) if the reverse string === original string --> true else the false

*/

let inputPal='madam'
let revOfPal=''
let palArr=inputPal.split("")
let palLen=palArr.length

function palindromeOrNot(){
    for(let i=palLen-1;i>=0;i--){
        revOfPal=revOfPal+palArr[i]
    }
    if(inputPal.toLowerCase()===revOfPal.toLowerCase()){
        console.log(`true`)
    }else{
        console.log(`false`)
    }
}

palindromeOrNot()
