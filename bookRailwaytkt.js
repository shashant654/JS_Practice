bookRailwayTkt();

function bookRailwayTkt() {
    const seat = 'A4'
    const name = 'shashant'
    const payment = 778;
    selectSeats(seat)
                 .then((seat) => {
                    enterDetails(name,seat)
                 })

         .then((details) => {
            submitPayment(name,seat,payment);
         })        
}


function selectSeats(seat) {
    return new Promise(function(resolve,reject){
        setTimeout(() => {
            console.log('seat confirmed',seat);
            resolve(`confirmed ${seat}`)
        },2000)
    })
}



function enterDetails(name,seat) {
    return new Promise(function(resolve,reject){
        setTimeout(() => {
            console.log('name bined',name,'with',seat);
            resolve(`confirmed ${name} ${seat}`)
        },2000)
    })
}



function submitPayment(name,seat,payment) {
    return new Promise(function(resolve,reject){
        setTimeout(() => {
            console.log('payment confirmed',name ,'with',seat,'with',payment);
            resolve(`confirmed ${name} ${seat} ${payment}`)
        },2000)
    })
}

