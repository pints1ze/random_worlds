'use strict';

class Car {
    constructor(doors, engine, color) {
        this.doors = doors;
        this.engine = engine;
        this.color = color;
    }
    carStats(){
        return `This car has ${this.doors} doors, a ${this.engine} engine and is ${this.color}.`;
    }
    static sayHello(car) {
        return `This car has ${car.doors} doors, a ${car.engine} engine and is ${car.color}.`;
    }
}
class SUV extends Car {
    constructor(doors, engine, color, brand) {
        super(doors, engine, color);
        this.brand = brand;
        this.wheels = 4;
        this.ac = true;
    }

    myBrand () {
        return `this SUV is a ${this.brand}`;
    }

}

const cx5 = new Car(4, 'V6', 'grey');
console.log(cx5);
console.log(cx5.carStats());
console.log(Car.sayHello(cx5));
console.log(cx5 instanceof Car);
console.log(cx5 instanceof SUV);



const city = 'Chicago';
//city = 'Chicago';
console.log(city);



const today = new Date();
const weekAgoDate = function() {
    const date = new Date();
    date.setDate(date.getDate()-7);
    return date;
}
const weekAgo = weekAgoDate();
console.log(today);
console.log(weekAgo);



const abRatio = 0.95;
const input = 52;
const abFactor = (value) => {
    return (value * abRatio);
};
console.log(`abFactor: ${abFactor(input)}`);




