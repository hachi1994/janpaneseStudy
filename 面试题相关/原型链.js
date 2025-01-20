function Animal(name){
    this.name = name;
}
Animal.prototype.say = function() {
    console.log(this.name,'say');
}

function Dog(name) {
    Animal.call(this,name);
}
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function() {
    console.log('wof');
}
const d = new Dog('tom');
d.say();
d.bark();
