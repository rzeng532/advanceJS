/*
 * 方式 1
 * 利用 {} 和 属性创建内部变量和函数。
 * 弊端：无法重复创建实例。
 */
let car = {};

car.name = 'Buick';
car.power = 20;
car.oilWear = 8;

car.run = function(kmNUm) {
    this.power -= (kmNUm / this.oilWear);
    //为什么用 ${this.name} 打印不出来，是原文输出
    //console.log('${this.name} run ' + kmNUm + 'KM.');

    console.log(this.name + ' run ' + kmNUm + 'KM. Remain oil ' + this.power);
}

car.addOil = function(addPower) {
    this.power += addPower;
    //console.log('Add oil for car ${this.name}, remain oil can run ' + this.power * this.addOil);
    console.log('Add oil for car ' + this.name + ', remain oil '+ this.power + ' can run ' + this.power * this.oilWear);
}

car.addOil(10);
car.run(100);