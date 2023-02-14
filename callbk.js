// function orderPizza (myFunction) {  // here myFunction is callback fxn
//     setTimeout(() => {
//     const pizza = '🍕';
//     myFunction(pizza);

//   },2000)
// }

// function notifyMeOrSuccess(pizza) {
//     console.log('here is my notification for',pizza);
// }

// orderPizza(notifyMeOrSuccess);
// console.log('visited nani');
// console.log('rest');


function orderPizza (myFunction) {  // here myFunction is callback fxn
getCheese((cheese) => {
    makeDough(cheese ,(dough) =>{
        bakePizza(dough ,(pizza) => {
            myFunction(pizza)
        })
    })
})
}

function getCheese(next) { // next is callback fxn
    setTimeout(() => {
        const cheese = '🍕';
        console.log(`sending the ${cheese}`);
    next(cheese);
      },2000)
}

function makeDough(cheese ,next) {
    setTimeout(() => {
        const dough = cheese + '🍩';
        console.log(`sending the ${dough}`);
    next(dough);
      },2000) 
}


function bakePizza(dough ,next) {
    setTimeout(() => {
        const pizza = dough + '🍕';
        console.log(`sending the ${pizza}`);
    next(pizza);
      },2000) 
}

function notifyMeOrSuccess(pizza) {
    console.log('here is my notification for',pizza);
}

orderPizza(notifyMeOrSuccess);
console.log('visited nani');
console.log('rest');


