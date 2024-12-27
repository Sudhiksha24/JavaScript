function greet(name) {
    return `Welcome, ${name}!`;
    }
    class Car {
    constructor(make, model) {
    this.make = make;
    this.model = model;
    }
    getDetails() {
    return `${this.make} ${this.model}`;
    }
    }
    const carPrice = "Rs.50.45 Lakh";
    export { greet, Car, carPrice };
    import { greet, Car, carPrice } from './myModule.js';
    console.log(greet('Sudhi'));
    const myCar = new Car('Audi', 'BMW');
    console.log(myCar.getDetails());
    console.log(`Car price: ${carPrice}`);