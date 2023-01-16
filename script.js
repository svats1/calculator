const buttons = document.querySelector('.buttons');
const calc = document.querySelector('.calc');
const hist = document.querySelector('.hist');

calc.textContent = 0;

let displayVal = calc.textContent;
let firstNum;
let secondNum;
let operator;
let result;

buttons.addEventListener('click', (e) => {
  switch (e.target.className) {
    case 'number':
      if (displayVal != 0) {
        if (!firstNum) {
          if (calc.textContent.length < 10) {
            calc.textContent += e.target.textContent;
            displayVal = calc.textContent;
          }
        } else if (firstNum) {
          if (!secondNum) {
            calc.textContent = e.target.textContent;
            displayVal = calc.textContent;
            secondNum = displayVal;
          } else if (calc.textContent.length < 10) {
            calc.textContent += e.target.textContent;
            displayVal = calc.textContent;
            secondNum = displayVal;
          }
        }
      } else {
        hist.textContent = '';
        calc.textContent = e.target.textContent;
        displayVal = calc.textContent;
        if (firstNum) {
          secondNum += calc.textContent;
        }
      }
      break;

    case 'operation':
      if (!secondNum) {
        firstNum = displayVal;
      } else {
        result = operate(operator, +parseFloat(firstNum).toFixed(2), +parseFloat(secondNum).toFixed(2));
        if ((`${result}`.length) < 11) {
          firstNum = result;
          calc.textContent = result;
        } else {
          calc.textContent = 'too far';
        }
        result = '';
      }
      operator = e.target.textContent;
      hist.textContent = `${firstNum} ${operator} `;
      secondNum = '';
      break;

    case 'equal':
      if (secondNum) {
        hist.textContent += secondNum;
        result = operate(operator, +parseFloat(firstNum).toFixed(2), +parseFloat(secondNum).toFixed(2));
      }
      if ((`${result}`.length) < 11) {
        calc.textContent = result;
      } else calc.textContent = 'too far';
      displayVal = result;
      firstNum = '';
      secondNum = '';
      break;

    case 'clear':
      calc.textContent = 0;
      displayVal = '';
      firstNum = '';
      secondNum = '';
      result = '';
      hist.textContent = '';
      break;
  }
});

function operate(k, a, b) {
  switch (k) {
    case '+': return sum(a, b);
    case '-': return diff(a, b);
    case 'X': return prod(a, b);
    case '/': return div(a, b);
    case '^': return pow(a, b);
    case '%': return mod(a, b);
  }
}

function sum(a, b) {
  return a + b;
}
function diff(a, b) {
  return a - b;
}
function prod(a, b) {
  return a * b;
}
function div(a, b) {
  if (b === 0) return 'nice try';
  return (a / b);
}
function pow(a, b) {
  return a ** b;
}
function mod(a, b) {
  return a % b;
}
