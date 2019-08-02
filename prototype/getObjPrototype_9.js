/*
 * 方式 9
 * 
 * 缺点：
 */

function Car(name, power, oilWear) {
    //关于Object 更多信息，包括多重继承，可以参考：
    //https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/create
    let car = Object.create(Car.prototype);

    car.name = name;
    car.power = power;
    car.oilWear = oilWear;

    return car;
}

Car.prototype.run = function(kmNUm) {
    this.power -= (kmNUm / this.oilWear);
    this.power = (this.power).toFixed(2);
    //为什么用 ${this.name} 打印不出来，是原文输出
    //console.log('${this.name} run ' + kmNUm + 'KM.');

    console.log(this.name + ' run ' + kmNUm + 'KM. Remain oil ' + this.power);
};

Car.prototype.addOil = function(addPower) {
    this.power += addPower;
    //console.log('Add oil for car ${this.name}, remain oil can run ' + this.power * this.addOil);
    console.log('Add oil for car ' + this.name + ', remain oil '+ this.power + ' can run ' + (this.power * this.oilWear).toFixed(2));
};

//直接基于最外层Function设置属性即可实现static函数。
Car.sortCarsByOilRemain = function(cars) {
    let sortedCars = cars.sort((car1, car2) => {
        return car1.power - car2.power;
    });

    // for(var i = 0; i < sortedCars.length; i++) {
    //     console.log(sortedCars[i].name + ',' + sortedCars[i].power);
    // }

    return sortedCars[0].name;
};

let buick = Car('Buick', 20, 8);
let dasAuto = Car('dasAuto', 20, 7);

buick.run(100);
dasAuto.run(100);

console.log('Oil top car: ' + Car.sortCarsByOilRemain([buick, dasAuto]));