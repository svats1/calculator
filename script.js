const body = document.querySelector('.outerbody')
const buttons = document.querySelector('.buttons')
const screen = document.querySelector('.screen')
const calc = document.querySelector('.calc')
const hist = document.querySelector('.hist')

calc.textContent = 0

let displayVal = calc.textContent
let firstNum
let secondNum
let operator
let result



buttons.addEventListener('click', (e) => {
    displayVal = calc.textContent

    switch (e.target.className){
        case "number":
            if (calc.textContent != 0) {
                if (!firstNum) {
                    if (calc.textContent.length < 10) {
                        calc.textContent += e.target.textContent
                        displayVal = calc.textContent
                    }
                }
                else if (!!firstNum) {
                    if (secondNum.length > 0) {
                        calc.textContent += e.target.textContent
                        displayVal = calc.textContent
                        secondNum = displayVal
                    }
                    else {
                        calc.textContent = e.target.textContent
                        displayVal = calc.textContent
                        secondNum = displayVal
                    }
                }
            } 
            else {
                calc.textContent = e.target.textContent
                displayVal = calc.textContent
            }
        break

        case "operation":
            if (!secondNum) {
                firstNum = displayVal
            } else {
                result = operate(operator, parseInt(firstNum), parseInt(secondNum))
                firstNum = result            
            }
            operator = e.target.textContent
            hist.textContent = `${firstNum} ${operator} `
            displayVal = calc.textContent
            secondNum = ''
        break

        case "equal":
            result = operate(operator, parseInt(firstNum), parseInt(secondNum))
            hist.textContent += secondNum
            calc.textContent = result
            displayVal = calc.textContent
        break

        case "clear":
            calc.textContent = 0
            displayVal = ''
            firstNum = ''
            secondNum = ''
            result = ''
            hist.textContent = ''
        break
    }
})

function operate (k,a,b) {
    switch (k) {
        case "+": return sum(a,b)
        case "-": return diff(a,b)
        case "X": return prod(a,b)
        case "/": return div(a,b)
        case "^": return pow(a,b)
        case "%": return mod(a,b)

    }
}

function sum(a,b) {
    return a + b
}
function diff(a,b) {
    return a - b
}
function prod(a,b) {
    return a * b
}
function div(a,b) {
    return a / b
}
function pow(a,b) {
    return Math.pow(a,b)
}
function mod(a,b) {
    return a % b
}