const buttons = document.querySelectorAll('.buttons button');
const result = document.getElementById('result');
const equal = document.querySelector('.equal');
const clear = document.querySelector('.clear');

let firstOperand = null;
let secondOperand = null;
let operator = null;

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    if (button.classList.contains('operator')) {
      if (result.value) {
        firstOperand = parseFloat(result.value);
        operator = button.textContent;
        result.value = '';
      }
    } else {
      if (button.textContent === '.' && result.value.includes('.')) return;
      result.value += button.textContent;
    }
  });
});

equal.addEventListener('click', () => {
  if (result.value && operator !== null) {
    secondOperand = parseFloat(result.value);
    let finalResult = 0;

    switch (operator) {
      case '+':
        finalResult = firstOperand + secondOperand;
        break;
      case '-':
        finalResult = firstOperand - secondOperand;
        break;
      case 'x':
        finalResult = firstOperand * secondOperand;
        break;
      case '/':
        finalResult = secondOperand !== 0 ? firstOperand / secondOperand : 'Error';
        break;
      default:
        finalResult = 'Error';
    }

    result.value = isNaN(finalResult) ? 'Error' : parseFloat(finalResult.toFixed(8));
    firstOperand = null;
    secondOperand = null;
    operator = null;
  }
});

clear.addEventListener('click', () => {
  result.value = '';
  firstOperand = null;
  secondOperand = null;
  operator = null;
});