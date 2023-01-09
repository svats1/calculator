const body = document.querySelector('.outerbody')
const buttons = document.querySelector('.buttons')
const screen = document.querySelector('.screen')
const calc = document.querySelector('.calc')
const hist = document.querySelector('.hist')

buttons.addEventListener('click', (e) => {
    switch (e.target.className) {        
        case "number":         
            calc.textContent = e.target.textContent        
        break

        case "operation":
            hist.textContent = e.target.textContent
        break
        
        default:
        // calc.textContent = "NOPE"
    }
})

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

function compute(operation,a,b) {

}