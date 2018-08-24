class Animal {
    constructor(name, owner) {
        this.name = name;
        this.owner = owner;
        Animal.numOfAnimals++;
    }
    ownerInfo() {
        document.write(this.name + " is owned by " + this.owner + "</br>");
    }
    static howManyAnimals() {
        return Animal.numOfAnimals;
    }
    get weight() {
        return this._weight;
    }
    set weight(weight) {
        this._weight = weight;
    }
}
Animal.numOfAnimals = 0;
let spot = new Animal("Spot", "John");
spot.ownerInfo();
spot.weight = 100;
document.write("Spot's weight is: " + spot.weight + "</br>");
document.write("# of Animals " + Animal.howManyAnimals() + "</br>");
class Dog extends Animal {
    constructor(name, owner) {
        super(name, owner);
        Dog.numOfAnimals++;
    }
}
let grover = new Dog("Grover", "Jimmy");
document.write("# of Animals " + Animal.howManyAnimals() + "</br>");
document.write("Is a dog an Animal: " + (grover instanceof Animal) + "</br>");
document.write("Does grover have a name: " + ('name' in grover) + "</br>");
