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


let digitButtons = document.getElementsByClassName("digit");

function displayNumbers() { 
    console.log("the event listener is working");
};

for (let i=0; i < digitButtons.length; i++) { 
    digitButtons[i].addEventListener("click", displayNumbers);
};



