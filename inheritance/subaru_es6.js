class Car{
    constructor(name, power, oilWear) {
        this.name = name;
        this.power = power;
        this.oilWear = oilWear;
    };

    run (kmNUm) {
        this.power -= (kmNUm * (this.oilWear / 100));
        this.power = (this.power).toFixed(2);
        
        console.log(this.name + ' run ' + kmNUm + 'KM. Remain oil ' + this.power);
    };

    addOil(addPower) {
        this.power += addPower;
        console.log('Add oil for car ' + this.name + ', remain oil '+ this.power + ' can run ' + (this.power * this.oilWear).toFixed(2));
    };
}

class Subaru extends Car {
    constructor(name, power, oilWear, xmode) {
        //直接使用 super 就可以初始化 ‘父类’
        super(name, power, oilWear)
        this.xmode = xmode;
    };

    openXMode() {
        this.power -= this.xmode;
        console.log("cur power is " + this.power);
    }
}
