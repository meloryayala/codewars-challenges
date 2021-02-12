
//You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer (N). Write a method that takes the array as an argument and returns this "outlier" (N).

function findOutlier(integers){
    var amoutEven = 0
    var amoutOdd = 0
    if(Math.abs(integers[0] % 2) == 0) {
        amoutEven++
    } else {
        amoutOdd++
    }

    if(Math.abs(integers[1] % 2) == 0) {
        amoutEven++
    } else {
        amoutOdd++
    }

    if(Math.abs(integers[2] % 2) == 0) {
        amoutEven++
    } else {
        amoutOdd++
    }

    var isEvenArray = amoutEven > amoutOdd


    for (const integer of integers){
        const resto =  Math.abs(integer % 2)

        if (isEvenArray && resto == 1){
            return integer
        } else if (!isEvenArray && resto == 0){
            return integer
        }
    }
}