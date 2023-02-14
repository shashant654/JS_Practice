
const counterText = document.getElementById('counter')
const posBtn = document.getElementById('pos-btn')
const negBtn = document.getElementById('neg-btn')

let count = 0;

posBtn.addEventListener('click', () => {
    count++;
    updateCount();
})


negBtn.addEventListener('click', () => {
    if(count > 0) {
        count--;
        updateCount();
    }
   
})


function updateCount() {
    counterText.innerHTML = count;
}