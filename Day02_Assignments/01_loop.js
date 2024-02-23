/*
int val = 5;
funtion to sum all the values between 1 to val
and return the sum
// activity ---> print between 1, 10 --> keep adding the sum of values
// 1, 2 (3), 3 (6), 4 (10), 5 (15)
// finally, print the sum !! 

*/

let val = 15;
let sum = 0;

function sumOfAllValues(){
    for(let i=1;i<=val;i++){
        sum=sum+i
    }
    console.log(sum)
}

sumOfAllValues()