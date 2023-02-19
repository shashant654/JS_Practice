let myheros = ["thor", "spiderman"]
let dcHeroes = ["batman","black adam", "superman"]

let heropower = {
    thor : "hammer",
    spiderman : "sling",

    getSpiderPower : function() {
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.shashant = function() {
    console.log(`shashant is present in all objects`);
}

Array.prototype.heyShashant = function() {
    console.log(`shashant says hello`);
}

myheros.shashant()   

// inheritance 

const user = {
    name : "top name",
    email : "topuser@gmail.com"
}

const Teacher ={
   makeVideo : true
}

const TeachingSupport = {
    isAvailable : false
}

const TSAssistant = {
    makeAssignment : 'Js assignment',
    fullTime : true,
    __proto__ : TeachingSupport  // type TSAssistant at the place of console then i find shashant
}

// old syntax
Teacher.__proto__ = user   // type Teacher.email at the place of console the we cna find
// with the help of this teacher can access the property of user 


// modern syntax
Object.setPrototypeOf(TeachingSupport,Teacher) // with the help of TeachingSupport can access the property of Teacher 

// Goal : get trueLength of string 

String.prototype.truelength = function() {
    console.log(`true length is : ${this.trim().length}`);
}

let myname = "shashant   ";     