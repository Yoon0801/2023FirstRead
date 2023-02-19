const plus = function(numA, numB){
    return numA + numB;
};

const plus2 = (numA, numB) => {
    return numA + numB;
};

const plus3 = (numA, numB) => numA + numB;

const noParameter = () => console.log('noParameter');

const helloPerson = person => `Hello, ${person}`;

const helloPerson2 = function(name){
    console.log(`hello, ${name}`);
}

console.log(helloPerson("123"));
console.log(plus3(1, 2));
noParameter();
helloPerson2('test');