console.log('hello');

// object literal for creating objects
let car = {
    name: 'Maruti 800',
    topSpeed: 89,
    run: function () {
        console.log('car is running');

    }
}
//we have already seen constuctors like these
//new Date();
// Creating a constructor for cars
function generalCar(Givenname, givenSpeed) {
    this.name = Givenname;
    this.topSpeed = givenSpeed
    this.run = function () {
        console.log(`${this.name} is running`);
    }
    this.analyze = function () {
        console.log(`this car is slower by ${200 - this.topSpeed}km/H than Mercedes`);

    }
}
car1 = new generalCar('Nissan', 180);
car2 = new generalCar('Maruti alto', 180);
car3 = new generalCar('Mecedes', 200);
console.log(car3);
console.log(car1)
console.log(car2)
//console.log(car);