const body = document.querySelector('.outerbody')
const buttons = document.querySelector('.buttons')
const screen = document.querySelector('.screen')
const calc = document.querySelector('.calc')
const hist = document.querySelector('.hist')

calc.textContent = 0

buttons.addEventListener('click', (e) => {
    // console.log(e.target.className)
    switch (e.target.className) {        
        case "number":
            if (calc.textContent != 0) {
                if (calc.textContent.length < 10) {
                    calc.textContent += parseInt(e.target.textContent)
                }       
            } else calc.textContent = e.target.textContent        
        break

        case "operation":
            hist.textContent = `${calc.textContent} ${e.target.textContent}`
        break
        
        case "clear":
            calc.textContent = 0
            hist.textContent = ''
        break
        
        case "equal":
            calc.textContent = operate("+",1,3)
        break

        default:
        // calc.textContent = "NOPE"
    }
})

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