/*
 * 方式 10
 * 使用 instace of 判断obj 是否属于当前类，同时用于构造函数，防止调用方忘记使用new造成this未创建.
 * 缺点：
 */

function Car(name, power, oilWear) {
 
    if(!(this instanceof Car)) {
        return new Car(name, power, oilWear);
    }

    this.name = name;
    this.power = power;
    this.oilWear = oilWear;

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

//这里从直接的函数调用变成使用 new 的方式。
let buick = new Car('Buick', 20, 8);
let dasAuth = new Car('dasAuth', 20, 7);

buick.run(100);
dasAuth.run(100);