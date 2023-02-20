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


// setInterval(() => {
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
const sum = num.reduce((acc,curr) => acc + curr , 1) // accumulator is somebody who is collecting everything
console.log(sum);


// DESTRUCTURING AND SPREAD AND REST 
// const sci = [1,2,3,4,55,6,7,8]
// let [a,s,f,g,r,h,j,k] = sci

// console.log(a,s,f,g,r,j,k);
// // o/p => 1,2,3,4,55,6,7,8


// const arr2 = [1,2,3,4,5,6,7]
// let [num1,num2, ...rest] = arr2

// console.log(num1,num2);
// console.log(rest);


// function sumone(x,y) {
//     return x+y
// }

// let vari = [9,8,5,6,7,8]
// console.log(sumone(...vari)); // use of spread
// o/p => 17


// use of rest 
// function sum(...args) {
//     console.log(args);
//     let sum = 0;
//     for(const x of args) {
//         sum = sum + x;
//     }
//      return sum;
// }

// console.log(sum(1,2,3,4,55,6,7));


// try and catch 
// try{
//     // logic error 
// } catch{
//     // logic handling message 
// }


// try{
//     let firstName = "shashant"
//     console.log(firstName);
// } catch(err){
//      console.log("variable name miising ");
// } finally{
//     console.log("I will run");
// }
// o/p => shashant ,I wil run 



// const userOne = () => {
//     console.log("hello One");
// }


// const userTwo = () => {
//     setTimeout(() => {
//         console.log("hello i am inside");
//     },3000)

//     console.log("hello two");
// }


// const userThree = () => {
//     console.log("hello three");
// }

// userOne()
// userTwo()
// userThree()


// promise 
const one = () => {
    return "Index Page"
}

const two = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("credential correct")
        },3000)
    })

}


const three = () => {
    return "redirect to home page"
}

const callMe = async () => {
    let valone = one()
    console.log(valone);

    let valTwo =await two()
    console.log(valTwo);

    
    let valThree = three()
    console.log(valThree);

}

callMe()