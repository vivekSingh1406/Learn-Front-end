// Rest Parameters
function sum(...nums){
    return nums.reduce((a,b)=> a+b);
}
console.log(sum(1,2,3,4,5,6,7));

// Spread Operator (...)
const nums = [1,2,3];
const newNum = [...nums, 4,5,6];
console.log("Using Spread Operator Connect Data: ",newNum);

