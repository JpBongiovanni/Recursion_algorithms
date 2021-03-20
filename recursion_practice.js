
// 1. Write a recursive function that given a number returns the sum of integers from 1 to that number.
// Example: rSigma(5) = 15 (1+2+3+4+5); rSigma(2.5) = 3 (1+2); rSigma(-1) = 0.
function rSigma(num){
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
    if(startPoint == 3){
        
    }
}

//1. basic recursive function
console.log(rSigma(5)) 

//2. Recursive Factoral
console.log(rFact(6.5)) 

//3. Floodfill
console.log(floodFill(
    [[3,2,3,4,3],
     [2,3,3,4,0],
     [7,3,3,5,3],
     [6,5,3,4,1],
     [1,2,3,3,3]], 2, 2, 1))
