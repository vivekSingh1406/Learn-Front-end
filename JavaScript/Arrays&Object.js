
// map
const number = [1, 2, 3, 4, 5, 6];
const doubled = number.map(n => n*2);
console.log("using map, number convert into doubled : ", doubled);

// filter
const age = [12, 10, 13,16, 17, 19, 20, 56];
const filterNum = age.filter(t => t%2==0 && t> 15);
console.log("filter data : ", filterNum);


// reduce
const nums = [1, 2, 3, 4];
const sum = nums.reduce((total, n) => total + n, 0);
console.log(sum); // 10


// flatmap
const words = ["hello world", "hi"];
const result = words.flatMap(w => w.split(" "));
console.log("convert in list of string : ",result);


// flat(Flattens nested arrays)
// Recursive Function (Most Common)
function flatten(arr) {
  let result = [];

  for (let item of arr) {
    if (Array.isArray(item)) {
      result = result.concat(flatten(item));
    } else {
      result.push(item);
    }
  }
  return result;
}

const arr = [1, [2, [3, 4]], [5, 6, 7, [9, 10]]];
console.log(flatten(arr));
console.log(arr.flat(2)); 


// Another example (counting)
const fruits = ["apple", "apple", "banana", "vivek", "vivek", "vivek", "singh", "singh"];
const count = fruits.reduce((acc, item) => {
  acc[item] = (acc[item] || 0) + 1;
  return acc;
}, {});

console.log(count);


