 console.log("shashant shekhar");
 

//  var , let , const 

var isLoggedIn = false;
console.log(isLoggedIn);
console.log("isLoggedIn");

var paymentMode ;
console.log(paymentMode);
paymentMode = "Credit Card"
console.log(paymentMode);

// const 

const uid = "abc235"
// uid = "3g7" it's wrong 

var fullName = "shashant shekhar"
var email = "shashant654@gmail.com"
var password = "2344"

console.log(uid);
console.log("fullName is :" + fullName);
console.log("fullName is :", fullName);
console.log(fullName);
console.log(email);

console.log(`
with unique id: ${uid}
user is : ${fullName}
and his email is : ${email}
`);

var user = "subadmin"

switch (user) {
    case "admin":
        console.log("you get full access");
        break;

        case "subadmin":
            console.log("you get half access");
            break;

            case "testprep":
                console.log("you get totally access");
                break;

                case "user":
                    console.log("gets access to consume content");
                    break;
}


// FALSY VALUE 

// undefined
// null 
// 0 
// NaN 


var user = null

if(user) {
    console.log("condition is true");
}
 
//  output nothing 

var user = ""

if(user) {
    console.log("condition is true");
}
 
// output nothing


var user = "null"

if(user) {
    console.log("condition is true");
}

// output : condition is true 

console.log(2+2);
console.log(2+"2");
console.log(2+"2");
console.log("2" +"2");



// coersion 

var user = "2"

if(user) {
    console.log("condition is true");
}



var user = "2"

if( 2 == user) {
    console.log("condition is true");
}


var user = "2"

if( 2 === user) {
    console.log("condition is true");
}



// SELF EXECUTING ANONYMOUS FUNCTION 

// function sayHello() {
//     console.log("i am busy");
//     console.log("i have been busy");
// }
// sayHello()

(function () {
    console.log("i am busy");
    console.log("i have been busy");
})();