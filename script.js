const body = document.querySelector('.outerbody')
const buttons = document.querySelector('.buttons')
const screen = document.querySelector('.screen')
const calc = document.querySelector('.calc')
const hist = document.querySelector('.hist')

calc.textContent = 0

buttons.addEventListener('click', (e) => {
    displayVal(4)

})

function displayVal(k) {
    calc.textContent = k
}

function operate (k,a,b) {
    switch (k) {
        case "+": return sum(a,b)
        case "-": return diff(a,b)
        case "*": return prod(a,b)
        case "/": return div(a,b)
    }
}

function sum(a,b) {
    return (a) + (b)
}
function diff(a,b) {
    return (a) - (b)
}
function prod(a,b) {
    return (a) * (b)
}
function div(a,b) {
    return (a) / (b)
}