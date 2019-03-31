/*
 * 方式 8, base on 方式5
 * 在ES5下，基于function实现静态函数。
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

Car.sortCarsByOilRemain = function(cars) {
    //很多时候这里会报错：TypeError: cars.sort is not a function
    //不是因为这行有问题，是调用的地方有问题。入参如果不是iterable类型，无法使用sort，所以报错。
    let sortedCars = cars.sort((car1, car2) => {
        return car1.power - car2.power;
    });

    return sortedCars[0].name;
};

let buick = Car('Buick', 20, 8);
let dasAuth = Car('dasAuth', 20, 7);

buick.run(100);
dasAuth.run(100);

console.log(Car.sortCarsByOilRemain([buick, dasAuth]));

//打印 buikc 这个obj中的成员 -- 包括变量 & 函数
for(let key in buick) {
    //hasOwnProperty 表示当前obj所拥有的，这样function就不会包含，因为funciton属于prototype，是所有obj公用。
    if(buick.hasOwnProperty(key)) {
        console.log(key + ', ' + buick[key]);
    }
}

console.log('Is car? - Q: ' + (buick instanceof Car));
