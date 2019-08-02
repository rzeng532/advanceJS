function Car(name, power) {
    this.name = name;
    this.power = power;

    this.run = function(consumePower) {
        this.power -= consumePower;
    }

    this.addOil = function(addPower) {
        this.power += addPower;
        console.log('Add oil for car ${this.name}')
    }
}

let buick = new Car('Buick', 30);
let dasAuto = new Car('dasAuth', 35);