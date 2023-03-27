let arr = [1, 2, 3, 4, 5];

let avg = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};

console.log(avg(arr)); // 3

console.log(avg(1, 2, 3, 4, 5)); // NaN

let avgs = function (...arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};

console.log(avgs(1, 2, 3, 4, 5)); // 3

let number = [1, 2, 3, 4, 5];

console.log(Math.max(number)); // NaN

let numbers = [1, 2, 3, 4, 5];

console.log(Math.max(...numbers)); //  5

console.log(...numbers); // 1,2,3,4,5
