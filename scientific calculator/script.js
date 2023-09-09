let displayValue = '';

function appendToDisplay(value) {
    displayValue += value;
    document.getElementById('display').value = displayValue;
}

function clearDisplay() {
    displayValue = '';
    document.getElementById('display').value = '';
}

function calculate() {
    try {
        const result = eval(displayValue); // Using eval for simplicity (not recommended for production)
        displayValue = result.toString();
        document.getElementById('display').value = displayValue;
    } catch (error) {
        displayValue = 'Error';
        document.getElementById('display').value = displayValue;
    }
}

function calculateLog() {
    const inputValue = parseFloat(displayValue);
    const result = Math.log10(inputValue);
    displayValue = result.toString();
    document.getElementById('display').value = displayValue;
}

function calculateSin() {
    const inputValue = parseFloat(displayValue);
    const result = Math.sin(inputValue);
    displayValue = result.toString();
    document.getElementById('display').value = displayValue;
}

function calculateCos() {
    const inputValue = parseFloat(displayValue);
    const result = Math.cos(inputValue);
    displayValue = result.toString();
    document.getElementById('display').value = displayValue;
}

function calculateTan() {
    const inputValue = parseFloat(displayValue);
    const result = Math.tan(inputValue);
    displayValue = result.toString();
    document.getElementById('display').value = displayValue;
}

function calculateComplex() {
    displayValue += 'i';
    document.getElementById('display').value = displayValue;
}