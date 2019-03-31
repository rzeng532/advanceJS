/*
 * 方式 3
 * 将Car 中需要的函数剥离到一个 carMethods 对象，解决内存浪费和Car 对象臃肿的问题。
 * 缺点：
 */

const carMethods = {
    //？？ {} 内部用 run = function() {..} 为什么不可以？
    run(kmNUm) {
        this.power -= (kmNUm / this.oilWear);
        this.power = (this.power).toFixed(2);
        //为什么用 ${this.name} 打印不出来，是原文输出
        //console.log('${this.name} run ' + kmNUm + 'KM.');

        console.log(this.name + ' run ' + kmNUm + 'KM. Remain oil ' + this.power);
    },

    addOil(addPower) {
        this.power += addPower;
        //console.log('Add oil for car ${this.name}, remain oil can run ' + this.power * this.addOil);
        console.log('Add oil for car ' + this.name + ', remain oil '+ this.power + ' can run ' + (this.power * this.oilWear).toFixed(2));
    }
}

function Car(name, power, oilWear) {
    let car = {};

    car.name = name;
    car.power = power;
    car.oilWear = oilWear;

    car.run = carMethods.run;

    car.addOil = carMethods.addOil;

    return car;
}

let buick = Car('Buick', 20, 8);
let dasAuth = Car('dasAuth', 20, 7);

buick.run(100);
dasAuth.run(100);