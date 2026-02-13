let display = document.getElementById("display");

// Add number or operator to display
function appendValue(value) {
    display.value += value;
}

// Clear display
function clearDisplay() {
    display.value = "";
}

// Calculate result
function calculate() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
}

// Remove last character
function backspace() {
    display.value = display.value.slice(0, -1);
}

function square() {
    display.value = display.value * display.value;
}

function squareRoot() {
    display.value = Math.sqrt(display.value);
}

function percentage() {
    display.value = display.value / 100;
}
