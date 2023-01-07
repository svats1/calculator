const body = document.querySelector('.outerbody')
const buttons = document.querySelector('.buttons')
const screen = document.querySelector('.screen')

let numBtns = 0

while (numBtns < 16) {
    const btn = document.createElement('div')
    btn.className = "button"
    // btn.w
    buttons.appendChild(btn)
    numBtns++
}