export default function calculate(a, b, operation) {
    switch (operation) {
    case 'add':
    return a + b;
    case 'subtract':
    return a - b;
    case 'multiply':
    return a * b;
    case 'divide':
    if (b === 0) {
    return 'Error: Division by zero';
    }
    return a / b;
    default:
    return 'Invalid operation';
    }
    }
    import calculate from './myModule2.js';
    console.log(calculate(7, 5, 'add'));
    console.log(calculate(7, 5, 'subtract'));
    console.log(calculate(7, 5, 'multiply'));
    console.log(calculate(7, 5, 'divide'));
    console.log(calculate(7, 0, 'divide'));
    console.log(calculate(7, 5, 'unknown'));