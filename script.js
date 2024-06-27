const form = document.getElementById('calculator-form');
const num1Input = document.getElementById('num1');
const num2Input = document.getElementById('num2');
const operatorSelect = document.getElementById('operator');
const resultParagraph = document.getElementById('result');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);
    const operator = operatorSelect.value;

    let result;

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                result = 'Error: Division by zero!';
            } else {
                result = num1 / num2;
            }
            break;
        default:
            result = 'Error: Invalid operator!';
    }

    resultParagraph.textContent = `Result: ${result}`;
});