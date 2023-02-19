// callback
// function is calling a function
// Higher order functions are which take other function as a parameter or return a function as a value. The function passed as a parameter is called callback.

// const callback = (n) => {
//     return n ** 2;
// }

// function cube(callback,n) {
//     return callback(n) * n
// }

// console.log(cube(callback,n));



// const arr = ["hey","hi","hello","hola","Namaste"]

// arr.forEach(myfunc)
//  function myfunc(val) {
//     console.log(val);
//  }





// const arr = ["hey","hi","hello","hola","Namaste"]

// arr.forEach((ani) => {
//     console.log(ani);
// })
 


// setTimeout(() => {
//     console.log("Hello FSJS 2");
// },3000)


// setTimeout(() => {
//     console.log("`🤣`");
// },1000)



// const numbers = [1,3,2,4,5,57,8]
// const numSqu = numbers.map((num) => num*num)
// console.log(numSqu);


// filter
const count = [
    "India",
    "Pakistan",
    "Canada",
    "Japan",
    "Kenya",
    "Finland",
    "Germany",
    "Srilanka"
]

// const store = count.filter((val) => val.includes("land"))
// console.log(store);



// reduce 
const num = [1,2,3,4,5,6]
const sum = num.reduce((acc,curr) => acc + curr , 1)
console.log(sum);