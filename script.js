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
                    console.log('second number!')
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
            displayVal = calc.textContent
            firstNum = displayVal
            operator = e.target.textContent
            hist.textContent = `${firstNum} ${e.target.textContent}`
            console.log('first number set!')
            secondNum = ''
        break

        case "equal":
            result = operate(operator, parseInt(firstNum), parseInt(secondNum))
            hist.textContent += secondNum
            calc.textContent = result
        break

        case "clear":
            calc.textContent = 0
            displayVal = ''
            firstNum = ''
            secondNum = ''
            hist.textContent = ''
        break
    }
})

// function displayVal(k) {
//     calc.textContent = k
//     displayVal = calc.textContent

// }

function operate (k,a,b) {
    switch (k) {
        case "+": return sum(a,b)
        case "-": return diff(a,b)
        case "*": return prod(a,b)
        case "/": return div(a,b)
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