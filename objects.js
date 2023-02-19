const obj1 = {
    rocket : '🚀',
    fuel :2,
    config : {
        name : 'mars'
    }
}

obj1.fuel = 200;
obj1['year'] = 2000

// console.log(obj1);
// part 2

const obj2 = new Object()  // constructors
obj2.redbook = '🟥'
obj2.bluebook = '🟦'
obj2.myValue = '1 blue book'

// console.log(obj2);

// part 3
const powers = {
    fly : true,
    cordinate : Math.random() + 2
}

const obj3 = Object.create(powers)
console.log(obj3);
console.log(obj3.cordinate);
console.log(Object.getPrototypeOf(obj3));

// part 4 

const obj4 = Object.create({})
// obj4.name = "shashant"
// console.log(obj4);

Object.defineProperty(obj4,'book' ,{
    // icon : '🟦'
    get:() => '🟦',
    enumerable : true
})

// console.log(obj4);
// console.log(obj4.book);
// console.log(Object.getPrototypeOf(obj4));

for(k in obj4) {
    console.log("value is :",k);
}

// part 5 

const obj5 = {
    comics : 'marvel',
    pen : '',
    printComic: function(){
        this.pen += '🖋'
        console.log(this);
        return this;
        }

    // printaComic :() => {
    // // pen += '🖋'
    // console.log(this);
    // }
}

// console.log(obj5.printComic);
// console.log(obj5.printaComic);

console.log(obj5.printComic().printComic().printComic());
// console.log(obj5.printaComic());
