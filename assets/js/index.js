const firstNum = +prompt("Enter first number:");
const secondNum = +prompt("Enter second number:");
const num = +prompt("Enter number to check:");

//task 1
const getMaxValue = function (val1, val2){
    if(isNaN(val1 - val2)){
        return null;
    }
    if (val1 > val2)
    {
        return val1;
    }
    return val2;

}
console.log(getMaxValue(firstNum, secondNum));

//task 2
const getMinValue = function (val1, val2){
    if(isNaN(val1 - val2)){
        return null;
    }
    if (val1 < val2)
    {
        return val1;
    }
    return val2;

}
console.log(getMinValue(firstNum, secondNum));

//task 4
 const A = +prompt("Enter a:");
 const B = +prompt("Enter b:");
 const C = +prompt("Enter c:");

 const quadratic = function(a, b, c) {
     const D = b ** 2 - 4 * a * c;
     console.log("Discriminant: ", D);
     const x1 = (-b + D ** (1/2)) / (2 * a);
     const x2 = (-b - D ** (1/2)) / (2 * a);
     return [x1, x2];

 };

 console.log(quadratic(A, B, C));
