/*
1. Create a function named `calculateGrade` that takes a student's score as a parameter.

2. Use `switch` statement inside the function - 
   - Use a `switch` statement with the condition `true`.
   - Use `case` statements to check different score ranges and return the corresponding grade.

3. Declare and initialize the variable

4. Call the function and print the result


*/

let score

function calculateGrade(score){
    switch (true){
        case (score==100) : 
            console.log("A+ Grade")
            break;
        case (score<100 && score>=96) : 
            console.log("A Grade")
            break;
        case (score<96 && score>=86) : 
            console.log("B Grade")
            break;
        case (score<86 && score>=76) : 
            console.log("C Grade")
            break;
        case (score<76 && score>=66) : 
            console.log("D Grade")
            break;
        case (score<66 && score>=50) : 
            console.log("E Grade")
            break;
        default:
            console.log("Fail")

    }
}

calculateGrade(100);
calculateGrade(97);
calculateGrade(91);
calculateGrade(80);
calculateGrade(66);
calculateGrade(51);
calculateGrade(42);