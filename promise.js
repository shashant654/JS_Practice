function orderPizza() {
    return new Promise(function (result,reject) {
        setTimeout(() => {
            const isAvailable = false;
            if(isAvailable) {
            const pizza = '🍕';
            result(pizza)
            }  else {
                reject("We don't have pizza")
            }
        },2000)
    })
    
}

const pizzaPromise = orderPizza();

pizzaPromise
            .then((pizza) => {
                console.log('my pizza',pizza);
            })

            .catch(error => {
                console.log('error occur',error);
            })