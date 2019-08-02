/*
 * 方式 6
 * 使用 new 函数返回对象。new 会自动生成 this并自动返回对象。new means auto this.
 * this pattern called : Pseudoclassical Instantiation, 伪类实例化。
 * 缺点：
 */

function Car(name, power, oilWear) {
    //1 不需要手动调用Object.create;
    //2 不需要返回对象；
    //3 自动生成 this，构造函数内部直接用this 即可;
    //let car = Object.create(Car.prototype);

    this.name = name;
    this.power = power;
    this.oilWear = oilWear;

    //return car;
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