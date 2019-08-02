/*
 * 方式 7
 * 使用 class 方式实现 Car & 用new 方式实现 实例化。
 * class 是一个语法糖，本质上还是function。
 * 缺点：
 */

class Car{
    constructor(name, power, oilWear) {
        this.name = name;
        this.power = power;
        this.oilWear = oilWear;
    };

    //只能有一个constructor，否则报错：SyntaxError: A class may only have one constructor
    // constructor(name, power) {
    //     this.name = name;
    //     this.power = power;
    //     this.oilWear = 10;
    // };

    run (kmNUm) {
        this.power -= (kmNUm * (this.oilWear / 100));
        this.power = (this.power).toFixed(2);
        //为什么用 ${this.name} 打印不出来，是原文输出
        //console.log('${this.name} run ' + kmNUm + 'KM.');
    
        console.log(this.name + ' run ' + kmNUm + 'KM. Remain oil ' + this.power);
    };

    addOil(addPower) {
        this.power += addPower;
        //console.log('Add oil for car ${this.name}, remain oil can run ' + this.power * this.addOil);
        console.log('Add oil for car ' + this.name + ', remain oil '+ this.power + ' can run ' + (this.power * this.oilWear).toFixed(2));
    };

    //static只和class 一起
    static sortCarsByOilRemain(cars) {
        let sortedCars = cars.sort((car1, car2) => {
            return car1.power - car2.power;
        });

        // for(var i = 0; i < sortedCars.length; i++) {
        //     console.log(sortedCars[i].name + ',' + sortedCars[i].power);
        // }

        return sortedCars[0].name;
    };
}

//这里从直接的函数调用变成使用 new 的方式。
let buick = new Car('Buick', 20, 8);

//一个class 不允许有多个constructor
//let buickTwo = new Car('buickTwo', 20);
let dasAuto = new Car('dasAuto', 20, 7);

buick.run(100);
dasAuto.run(100);

console.log('Oil top car: ' + Car.sortCarsByOilRemain([buick, dasAuto]));