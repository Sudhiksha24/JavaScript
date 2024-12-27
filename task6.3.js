export function add(a, b) {
    return a + b;
    }
    export function subtract(a, b) {
    return a - b;
    }
    export function multiply(a, b) {
    return a * b;
    }
    export function divide(a, b) {
    if (b === 0) {
    return ('Error: Division by zero');
    }
    return a / b;
    }
    import calculate from './myModule2.js';
    console.log(calculate(7, 5, 'add'));
    console.log(calculate(7, 5, 'subtract'));
    console.log(calculate(7, 5, 'multiply'));
    console.log(calculate(7, 5, 'divide'));
    console.log(calculate(7, 0, 'divide'));
    console.log(calculate(7, 5, 'unknown'));