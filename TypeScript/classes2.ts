interface Vehicle{
	drive(): any;
}

class Car implements Vehicle{
	constructor(private wheel: number){}
		drive(): void{
			document.write("The car drives with" + this.wheel + "wheels </br>")
	}
}

class Bicycle implements Vehicle{
	constructor(private wheel: number){}
		drive(): void{
			document.write("The bicycle drives with" + this.wheel + "wheels </br>")
	}
}

let car = new Car(4)
let bicycle = new Bicycle(2)

car.drive();
bicycle.drive();