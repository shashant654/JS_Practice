
async function getCheese() {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve('cheese 🧀')
        },2000)
    })
}


async function makeDough(cheese) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve(`${cheese} dough 🍩`)
        },2000)
    })
}

async function makePizza(dough) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve(`${dough} pizza 🍕`)
        },2000)
    })
}



async function orderPizza() {  // async await ki help se hmlog sync me change
    try{                                     // kr pate hai
    const cheese = await getCheese()
    console.log('now we have ',cheese);
    const dough = await makeDough(cheese)
    console.log('now we have ',dough);
    const pizza = await makePizza(dough)
    console.log('now we have ',pizza);
    return pizza
}
  catch(e) {
    console.log(e);
  }
}



orderPizza().then((pizza) => {
    console.log(pizza);
})
.catch( e => {
    
})