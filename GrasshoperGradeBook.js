
//---Description---
//Complete the function so that it finds the average of the three scores
// passed to it and returns the letter value associated with that grade.


// Numerical Score	Letter Grade
// 90 <= score <= 100	'A'
// 80 <= score < 90	'B'
// 70 <= score < 80	'C'
// 60 <= score < 70	'D'
// 0 <= score < 60	'F'

//Tested values are all between 0 and 100.
// There is no need to check for negative values or values greater than 100.

function getGrade (s1, s2, s3) {
    const average = Math.round((s1 + s2 + s3) / getGrade.length)
    console.log(average)

    let score

    if (average >= 90 && average <= 100 ) {
        return score = 'A'
    } else if(average >= 80 && average <= 90) {
        return score = 'B'
    } else if(average >= 70 && average <= 80) {
        return score = 'C'
    } else if(average >= 60 && average <= 70) {
        return score = 'D'
    } else if(average >= 0 && average <= 60) {
        return score = 'F'
    }

    console.log(score)

}