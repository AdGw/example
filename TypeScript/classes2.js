class Car {
    constructor(wheel) {
        this.wheel = wheel;
    }
    drive() {
        document.write("The car drives with" + this.wheel + "wheels </br>");
    }
}
class Bicycle {
    constructor(wheel) {
        this.wheel = wheel;
    }
    drive() {
        document.write("The bicycle drives with" + this.wheel + "wheels </br>");
    }
}
let car = new Car(4);
let bicycle = new Bicycle(2);
function getWheels(veh) {
    return veh.drive();
}
getWheels(car);
getWheels(bicycle);
