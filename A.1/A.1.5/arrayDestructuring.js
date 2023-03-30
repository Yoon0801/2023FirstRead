const { a } = {a: 'hello'}
const [ b ] = 'hello'

console.log( a, b)

// let obj = {one: 1, two: 2};
// let test = obj.one;
// let g = obj.two;

// console.log(test);
// console.log(g);

// let objTwo = {three: 3, four: 4};
// let {test2, four} = objTwo;

// console.log(test2);
// console.log(four);


//type2 宣告與賦值分開
// let objTwo = {three: 3, four: 4};
// let three, four;
// ({three, four} = objTwo);

// console.log(three);
// console.log(four);

//type3 預設值
// let objTwo = {three: 3};
// let {three, four = 5} = objTwo;

// console.log(three);
// console.log(four);

//type4 指定新的變數名稱

// let objTwo = {three: 3, four: 4};
// let {three:test2, four:test100} = objTwo;

// console.log(test2);
// console.log(test100);














// let array = [1, 2, 3];
// let one = array[0];
// let two = array[1];
// let three = array[2];

// console.log(one);
// console.log(two);
// console.log(three);

// let arrTwo = [4, 5, 6]
// let [num1, num2, num3] = arrTwo;

// console.log(num1);
// console.log(num2);
// console.log(num3);

//type2 宣告與賦值分開
// let arrTwo = [4, 5, 6];
// let num1, num2, num3;
// [num1, num2, num3] = arrTwo;

// console.log(num1);
// console.log(num2);
// console.log(num3);



//type3 預設值
// let arrTwo = [4, 5, 6]
// let [num1, num2 = 7, num3 = 8] = arrTwo;

// console.log(num1);
// console.log(num2);
// console.log(num3);