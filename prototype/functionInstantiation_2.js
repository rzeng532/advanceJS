function Car(name, power, oilWear) {
    let car = {};

    car.name = name;
    car.power = power;
    car.oilWear = oilWear;

    car.run = function(kmNUm) {
        this.power -= (kmNUm / this.oilWear);
        this.power = (this.power).toFixed(2);
        //为什么用 ${this.name} 打印不出来，是原文输出
        //console.log('${this.name} run ' + kmNUm + 'KM.');

        console.log(this.name + ' run ' + kmNUm + 'KM. Remain oil ' + this.power);
    }

    car.addOil = function(addPower) {
        this.power += addPower;
        //console.log('Add oil for car ${this.name}, remain oil can run ' + this.power * this.addOil);
        console.log('Add oil for car ' + this.name + ', remain oil '+ this.power + ' can run ' + (this.power * this.oilWear).toFixed(2));
    }

    return car;
}

let buick = Car('Buick', 20, 8);
let dasAuth = Car('dasAuth', 20, 7);

buick.run(100);
dasAuth.run(100);