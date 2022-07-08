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
if (operator === '+') { 
    return add(x, y);
} else if (operator === '-') { 
    return subtract(x, y); 
} else if (operator === '*') { 
    return multiply(x, y); 
} else if (operator = '/') { 
    return divide(x, y);
}}; 


let Buttons = document.querySelectorAll('.item');
let displayScreen = document.querySelector('#calculator-display');
let displayValue = 0; 
displayScreen.innerHTML += displayValue; 

//event listener for each button
Buttons.forEach(item => { 
    addEventListener('click', (e) => { 
        updateDisplay(e)
    })
});


//update displayValue variable
let updateDisplay = (e) => { 
    displayValue = e.target.id;
    displayScreen.innerHTML = displayValue;
}







