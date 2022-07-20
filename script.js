//DOM elements 
const numberButtons = document.querySelectorAll('.number-button');
const displayScreen = document.querySelector('.calculator-display');
const operatorButton = document.querySelectorAll('.operator'); 
const currentOperand = document.querySelector('.current-operand');
const previousOperand = document.querySelector('.previous-operand');
const equalsKey = document.querySelector('.equals-key'); 
const clearButton = document.querySelector('.clear-button'); 

currentOperand.textContent = ' '; 
previousOperand.textContent = ' ';



// functions for calculations
function add(a, b) { 
    return a + b; 
}

function subtract(a, b) { 
    return a - b; 
}

function multiply(a, b) { 
    return a * b; 
}

function divide(a, b) { 
    return (a / b); 
}

// operate function that takes an operator (with quotes for now) and 2 numbers and calls the matching function
function operate(operator, x, y) { 
  switch (operator) { 
    case '+': 
      return add(x, y);
    case '-': 
      return subtract(x, y); 
    case '*': 
      return multiply(x, y);
    case '/': 
      return divide(x, y);
  }
};

// display values and clickedOperator variables
let displayValue = ''; 
let firstNumber = '';
let clickedOperator = '';
currentOperand.textContent = 0;

// Event listener that displays numbers
numberButtons.forEach((number) => { 
  number.addEventListener('click', function() { 
    displayValue += number.value;
    currentOperand.textContent = displayValue;
  })
});

operatorButton.forEach((operator => { 
  operator.addEventListener('click', function() { 
    if (firstNumber && displayValue) { 
      displayResult(); 
    }
    // save first number 
    firstNumber = displayValue;
    // get the operator that was clicked
    clickedOperator = operator.textContent;
    previousOperand.textContent = displayValue + clickedOperator; 
    displayValue = '';
  })
}));

equalsKey.addEventListener('click', function() { 
  displayResult(); 
});

// function to have result, numbers and operators show up on calculator displays
function displayResult() { 
if (clickedOperator == '/' && displayValue == 0){ 
  alert("Don't divide by zero!");
  clearButton.click(); 
} else { 
  result = operate(clickedOperator, parseFloat(firstNumber), parseFloat(displayValue))
  currentOperand.textContent = result; 
  previousOperand.textContent = firstNumber + ' ' + clickedOperator + ' ' + displayValue;
  displayValue = result;
}};

// clear button event listener
clearButton.addEventListener('click', function() { 
  previousOperand.textContent = ''; 
  currentOperand.textContent = 0; 
  clickedOperator = ''
  displayValue = '';
  firstNumber = ''; 
});









