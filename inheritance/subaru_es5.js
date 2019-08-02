function Car(name, power, oilWear) {
    this.name = name;
    this.power = power;
    this.oilWear = oilWear;
}

Car.prototype.run = function(kmNUm) {
    this.power -= (kmNUm / this.oilWear);
    this.power = (this.power).toFixed(2);
    console.log("Run " + kmNUm + "and power remain: " +  this.power);
};

Car.prototype.addOil = function(addPower) {
    this.power += addPower;
};

function Subaru(name, power, oilWear, xmode) {
    //用call 绑定 Subaru的this到 ‘父类’ 上面
    Car.call(this, name, power, oilWear);
    this.xmode = xmode;
}

//‘继承’ 其 ‘父类’ 的prototype 属性
Subaru.prototype = Object.create(Car.prototype);
Subaru.prototype.openXMode = function() {
    this.power -= this.xmode;
    console.log("cur power is " + this.power);
}
Subaru.prototype.constructor = Subaru;

function Buick(name, power, oilWear, turbo) {
    //用call 绑定 Subaru的this到 ‘父类’ 上面
    Car.call(this, name, power, oilWear);
    this.turbo = turbo;
}
//如果不增加这个操作，forester.constructor 就输出 'Car'。因为Subaru本身没有constructor于是到Parent -- Car寻找。
Buick.prototype = Object.create(Car.prototype);
Buick.prototype.openTurbo = function() {
    this.power -= this.turbo;
    console.log("cur power is " + this.power);
}
Buick.prototype.constructor = Buick;

const forester = new Subaru('Forester', 50, 8, 2);
const regar = new Buick('Regar', 50, 10, 1);

console.log(forester.name, forester.power, forester.oilWear);
forester.openXMode();
console.log(forester.constructor)

console.log(regar.name, regar.power, regar.oilWear);
regar.openTurbo();
console.log(regar.constructor)
