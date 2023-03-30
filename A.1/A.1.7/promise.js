//非同步執行
console.log('1');
async function show() {
    let second = await PrintSecond();
    console.log(second);
}
show();
console.log(3);

function PrintSecond() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("2")
        }, 2000);
    })
}

//同步執行
console.log('4');
console.log("5");
console.log('6');

//以非同步寫出同步
function PrintSecondSync() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("8");
            resolve();
        }, 5000);
    });
}

console.log("7");
PrintSecondSync().then(() => {
    console.log("9");
});

console.log('c');
console.log('e');
myClick();
console.log('d');

async function myClick() {
    console.log('a');
    let str_getPromiseResolveValue = await ReturnPromise()
    console.log(str_getPromiseResolveValue);

    let str_getPromiseThenReturnValue = await ReturnPromise().then(value => {
        return "this is " + value;
    })
    console.log(str_getPromiseThenReturnValue);

    let str_getFirstPromiseResolve = await ReturnPromise();
    let str_getSecondPromiseResolve = await ReturnSecondPromise(str_getFirstPromiseResolve);
    console.log(str_getSecondPromiseResolve);
    console.log('b');
}
function ReturnPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("OK")
        }, 2000);
    })
}
function ReturnSecondPromise(param) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`${param} is reolved`);
        }, 2000);
    })
}
