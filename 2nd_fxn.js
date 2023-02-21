function sayHello(name) {
    console.log("Hello there , shashant");
    // console.log("Hello there , " ,name);
    console.log(`Hello there, ${name} . How are you?`);
    
}

sayHello("shashant")
sayHello("sanny")


function namastey() {
    return "Hello is india"
    
}

var greetings = namastey();

console.log(greetings);
console.log(namastey());



function getUserRole(name,role) {
    switch (role) {
        case "admin":
            return `${name} is admin with all access`
            break; // this is not necessary when we use return

            case "subadmin":
            return `${name} is sub-admin with access to create adn delete`
            break;

            case "testprep":
            return `${name} is a test prep with access to create and delete`
            break;

            case "user":
            return `${name} is a user with access to create and delete`
            break;
    
        default:
            return `${name} is a trial user`
            break;
    }
    
}

console.log(getUserRole("shashant" ,"testprep"));

var getRole = getUserRole("sanny" , "user")
console.log(getRole);



// function in variable 

var getUserRole = function (name,role) {
    // var getUserRole = (name,role) => {  // arrow fxn
 
    switch (role) {
        case "admin":
            return `${name} is admin with all access`
            break; // this is not necessary when we use return

            case "subadmin":
            return `${name} is sub-admin with access to create adn delete`
            break;

            case "testprep":
            return `${name} is a test prep with access to create and delete`
            break;

            case "user":
            return `${name} is a user with access to create and delete`
            break;
    
        default:
            return `${name} is a trial user`
            break;
    }
    
}

console.log(getUserRole("shashant" ,"testprep"));

var getRole = getUserRole("sanny" , "user")
console.log(getRole);


// FUNCTION DECLARATIONS ARE SCANNED ADN MADE AVAILABLE

// VARIABLE DECLARATIONS ARE SCANNED AND MADE UNDEFINED 

function tipper(a) {
    var bill = a;
    console.log(bill + 5);
}

tipper(5);


// function tipper(a) {
//     var bill = a;
//     console.log(bill + 5);
// }

// tipper("5");


function tipper(a) {
    var bill = parseInt(a);
    console.log(bill + 5);
}

tipper("5");



function tipper(a) {
    var bill = parseInt(a);
    console.log(bill + 5);
}

tipper("a");


// HOISTING IN JAVASCRIPT

// function bigTipper(a) {
//     var bill = parseInt(a);
//     console.log(bill+5);
// }

// bigTipper("200")


// bigTipper("200");

// function bigTipper(a) {
//     var bill = parseInt(a);
//     console.log(bill+5);
// }



//  var bigTipper = function (a) {
//     var bill = parseInt(a);
//     console.log(bill+5);
// }

// bigTipper("200");


// bigTipper("200");

// var bigTipper = function (a) {
//     var bill = parseInt(a);
//     console.log(bill+5);
// }


// SCOPE CHAINING IN JAVASCRIPT

var name = "shashant"

console.log("line number 3",name);

function sayName() {
    var name ="mr. H"
    console.log("line number 5",name);

    sayNameTwo();

    function sayNameTwo() {
        // var name = "shekhar"
        console.log("line nmber 8",name);
        
    }
}

sayName();


// light intRO TO THIS IN JAVASCRIPT 

// console.log(this);

var states = new Array("raju","ravi","shubh")

var user = ["raj","ravi","raju"]
user.unshift("new value")
console.log(user);


user.shift()
console.log(user);

console.log(user.indexOf("ravi"));
console.log(Array.from("ravi")); // it works with function only 


// arrow function 
// var isEven = function (element) {
//     if(element % 2 === 0)
//     return true;
//     else
//     return false; 

//     // return element % 2 === 0;
// }

// console.log(isEven(4));


var isEven = (element) => {
    if(element % 2 === 0)
    return true;
    else
    return false; 
    // return element % 2 === 0;
}

console.log(isEven(4));


// function isEven(element) {
//     if(element % 2 === 0)
//     return true;
//     else
//     return false; 
//     // return element % 2 === 0;
// }

// console.log(isEven(4));


// callback fxn 


var result = [2,3,4,5,6,6,7].every(isEven);
console.log(result);


var result = [2,4,6,6].every(isEven);
console.log(result);


var result = [2,4,6,8].every((e) => {
    return e % 2 ===0;
});
console.log(result);



var result = [2,4,6,8].every((e) =>  e % 2 ===0);
console.log(result);


// fill and filter 

var testArray = [2,3,4,5,78,9,85,44,33,22,11]
console.log(testArray.fill("h" ,2,6));
// console.log(testArray.fill("h",4));
// console.log(testArray.fill("empty"));

const myNumber = [2,3,4,5,78,9,85,44,33,22,11]

const answer = myNumber.filter((num) => num != 22);
console.log(answer);


// slice and splice 

var number = [2,3,4,5,55,6,66,7,77,9,99]
// console.log(number.slice(1));
// console.log(number.slice(1,4));

// console.log(number.splice(1,3));
// console.log(number.splice(1,5));
// console.log(number.splice(1,3,"hii"));  // it's working


// number.splice(1,3,"hii")
// console.log(number);

number.splice(1,3,"hii","bye")
console.log(number);

// INTRODUCTION OF OBJECTS IN JS 
var user ={
    firstName : "shashant" ,
    lastName : "shekhar",
    role: "programmer"
}

console.log(user.firstName);
console.log(user["firstName"]);

user.role = "developer";
console.log(user.role);


// METHODS AND OBJECTS IN JS 

var user = {
    firstName : "shashant",
    lastName : "pandey",
    courseList : [],
    buyCourse : function (courseName) {
        this.courseList.push(courseName)
    },

    getCourseCount : function () {
        return `${this.firstName} is enrolled in total of ${this.courseList.length} course`
    }

}

var courseList = true
console.log(user.firstName);
console.log(user.getCourseCount());

user.buyCourse("react js course")
user.buyCourse("angular js course")
user.buyCourse(" js course")
console.log(user.getCourseCount());



// FOREACH LOOP 

var user = ["raj","ravi",6,5,"raju","ashu"]
user.forEach((u) => (console.log(u)))
// or we can write like this also 
user.forEach(u => console.log(u))

// FOR IN AND FOR OF LOOP

const names = ["youtube","facebook","insta","google"]
for(const n of names) {
    console.log(n);
}

const symbols = {
    yt : "youtube",
    tl: "telegram",
    ist: "insta",
    gg: "google"
}

for(const i in symbols) {
    console.log(`key is: ${i} and value is : ${symbols[i]}`);
}

// this keyword 
           
// FOR ALL REGULAR FUNCTION CALLS THIS POINTS TO WINDOW OBJECTS

var user = {
    firstName : "shashant",
    lastName : "pandey",
    getCourseCount: function (){
        console.log("Line nmber 7" , this );
    
    function sayHello() {
        console.log("hello");
        console.log("Line nmber 12" , this);
    }
    sayHello();
  }
}

user.getCourseCount();


// DOM => DOCUMENT OBJECT MODEL 

// NEW KEYWORD IN JS 
 var user = function (firstName,courseCount) {
    this.firstName = firstName;
    this.courseCount = courseCount;
    this.getCourseCount = function () {
        console.log(`Course count is : ${this.courseCount}`);
    }
 }


 user.prototype.getFirstname = function () {
    console.log(`Your firstname is : ${this.firstName}`);
 }


 var shashant = new user("shashant" , 3)
 console.log(shashant);
//  shashant.getFirstname();
 shashant.getCourseCount()

//  for better code 
if(shashant.hasOwnProperty("firstName")) {
    shashant.getFirstname();
}


 var sunny = new user("sunny" , 5)
 console.log(sunny);
 sunny.getCourseCount();
 sunny.getFirstname();

 
//  OBJECTS FROM MDN DOCS 
var User = {
    name:"",
    getUserName:function(){
        console.log(`User name is : ${this.name}`);
    },

    getCourseCount:function(){
        console.log(`courseCount is : ${this.courseCount}`);
    }
}

var shashant = Object.create(User)
// console.log(shashant);
shashant.name = "shashant shekhar"
shashant.getUserName();


var samm = Object.create(User ,{
name :{value : "samm"},
courseCount : { value:5}
})

samm.getUserName();
samm.getCourseCount()




// LEXICAL SCOPING IN JAVASCRIPT
// function init() {
//     var firstName = "shashant";
//     function sayFirstName() {
//         console.log(firstName);
//     }
//      sayFirstName();
    
// }

// init();

// console.log(firstName);


// closure in js 

// function init() {
//         var firstName = "shashant";
//         console.log("I am init");

//         function sayFirstName() {
//             console.log(firstName);
//         }
//         return  sayFirstName();  
//     }
    
//      var valu = init();
//     //  valu();
//     console.log(valu);


function doAddition(x) {
    return function (y) {
        return x + y;
    } 
}

var add5 = doAddition(4)
console.log(add5(5));

console.log(doAddition(5)(7)); // TAKE CARE THIS 



// BORROW A METHOD USING BIND 

const shekhar = {
    firstName : "shashant",
    lastName : "pandey",
    role : "admin",
    courseCount : "5",

    getInfo : function () {
          console.log(`
          First name is  ${this.firstName}
          last name is ${this.lastName}
          his role is ${this.role}
          and he is studying ${this.courseCount} course
          `);
    }
}


const dj = {
    firstName : "hitesh",
    lastName : "choudhary",
    role : "developer",
    courseCount : 4
}


// hitesh.getInfo()
// shekhar.getInfo()

        //   FRIST METHOD 
//   var djwale = shekhar.getInfo.bind(dj);
//   djwale()


    //   SECOND METHOD 
shekhar.getInfo.call(dj)


// template literals in js 

var name = `shekhar`
var fullName = `${name} pandey`

console.log(fullName);
console.log(fullName.charAt(0));
console.log(fullName.endsWith("?"));
console.log(fullName.includes("shekhar"));
console.log(fullName.toUpperCase());

// MAPS IN JS 

var myMap = new Map();

myMap.set(1 , "ravi")
myMap.set( 2, "raju")
myMap.set(3 , "ragib")
myMap.set(4 , "rahul")

console.log(myMap);

for(let key of myMap.keys()) {
    console.log(`key is ${key}`);
}


for(let value of myMap.values()) {
    console.log(`values is ${value}`);
}

for(let [key ,value] of myMap){
    console.log(`key is ${key} and value is ${value}`);
}


myMap.forEach((v,k) => console.log(`${v} and key is ${k}`))

myMap.delete(2)
console.log(myMap);


// DESTRUCTURE THE DATA 

// const data = ["shashant", 5 ,"admin"]
// var role = data[2]
// var name = data[0]

// var [name, courseCount ,role] = data

// console.log(role);


const MyData = {
    Name : "sanju",
    courseCount : 5,
    role : "engineer"
}

console.log(MyData.courseCount);

const { Name,courseCount,role} = MyData;
console.log(MyData.courseCount);

//  SPREAD AND REST OPERATORS

// var returnedValue = Math.max(2,5,7,4,2,8)
// console.log(returnedValue);

function sumOne(a,b) {
    return a + b;
}

var myA = [5,4]
console.log(sumOne(5,5,1)); // here 1 ko ignore kr diya hai
// console.log(sumOne(myA)); 
console.log(sumOne(...myA)); // spread operator


function sumTwo(a,b, ...args) {
    console.log(args);
    let multi = a*b;

    let sum = 0;
    for(const arg of args) {
        sum += arg;
    }
     return [ multi,sum];
}

console.log(sumTwo(3,4,8,9,6,5));