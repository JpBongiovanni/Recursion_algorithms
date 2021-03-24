
// 1. Write a recursive function that given a number returns the sum of integers from 1 to that number.
// Example: rSigma(5) = 15 (1+2+3+4+5); rSigma(2.5) = 3 (1+2); rSigma(-1) = 0.
function rSigma(num){
    num = Math.trunc(num)
    if(num > 0) {
        return rSigma(num-1) + num;
    }
    return 0
}

// 2. Recursive Factorial
// Given num, return the product of ints from 1 up to num. If less than zero, treat as zero. If not an integer, truncate. Experts tell us 0! is 1. rFact(3) = 6 (1*2*3). Also, rFact(6.5) = 720 (1*2*3*4*5*6).
function rFact(num){
    num = Math.trunc(num);
    if(num > 1){
        return rFact(num-1) * num;
    }
    return 1
}

//3. You are given a canvas (2-dimensional array of integers), starting coordinate (2-element array), and the color to flood (integer value). Build floodFill(canvas2D,startXY,newColor)! Replace a pixel’s color value only if it is the same color as the origin coordinate and is directly adjacent via X or Y to another pixel you will change. 

function floodFill(canvas2d, startX, startY, newColor){
    console.log(canvas2d[startX][startY]);
    var startPoint = canvas2d[startX][startY]
}

//4. Recursive fibonacci sequence
function rFib(num){
    num = Math.trunc(num)
    if(num === 3){
        return 2;
    } else if (num ===2){
        return 1;
    } else if (num === 1){
        return 0;
    } else {
        return rFib(num-1) + rFib(num-2)
    }
}

//5. Recursive Tribonacci sequence
function rTrib(num){
    Math.trunc()
    if (num === 3){
        return 1;
    } else if (num === 2){
        return 1;
    } else if (num === 1){
        return 0;
    } else {
        return rFib(num-1) + rFib(num-2) + rFib(num-3)
    }
}

//6. Ackermann's function
function ackermann(num1, num2){
    return num1 === 0 ? num2 + 1 : ackermann(num1-1, num2 === 0 ? 1 : ackermann(num1, num2 -1));
}

//7. Recursive Binary Search
function rBinarySearch(arr, value){
    var mid = Math.floor(arr.length/2);
    if(arr[mid] == value) {
        return true;
    }
    else if(value < arr[mid] && arr.length > 1) {
        return rBinarySearch(arr.slice(0, mid), value);
    }
    else if(value > arr[mid] && arr.length > 1){
        return rBinarySearch(arr.slice(mid, arr.length), value)
    } else {
        return false
    }
}

// 8. Greatest Common Factor
// Given two integers, create rGCF(num1,num2) to recursively determine Greatest Common Factor (the largest integer dividing evenly into both). Greek mathematician Euclid demonstrated these facts:
// gcf(a,b) == a, if a == b;
// gcf(a,b) == gcf(a-b,b), if a>b;
// gcf(a,b) == gcf(a,b-a), if b>a.
// Second: rework facts #2 and #3 to reduce stack consumption and expand rGCF’s reach. You should  be able to compute rGCF(123456,987654).

function rGCF(num1, num2){
    if (num1 == num2){
        return num1
    }
    if (num1 > num2){
        if ((num1/num2) % 1 === 0){
            return num2
        } else {
            return rGCF(num1-num2, num2);
        }
    }
    if (num1 < num2){
        if((num1/num2) % 1 === 0) {
            return num2;
        } else {
            return rGCF(num1, num2-num1);
        }
    }
}

//1. basic recursive function
// console.log(rSigma(5)) 

//2. Recursive Factoral
// console.log(rFact(6.5)) 

//3. Floodfill
// console.log(floodFill(
//     [[3,2,3,4,3],
//      [2,3,3,4,0],
//      [7,3,3,5,3],
//      [6,5,3,4,1],
//      [1,2,3,3,3]], 2, 2, 1))

//4. Recursive Fibonacci
// console.log(rFib(6))

//5. Recursive Tribonacci
// console.log(rTrib(4))

//6. Recursive Ackermann function - may not work
// console.log(ackermann(1, 2));

//7. Recursive Binary Search
// console.log(rBinarySearch([1, 3, 5, 6], 4));
// console.log(rBinarySearch([4, 5, 6, 8, 12], 5));

//8. Greatest Common Factor
// console.log(rGCF(3, 7));   
// console.log(rGCF(18, 27)); 
console.log(rGCF(123456, 987654));
console.log(rGCF(27, 12));