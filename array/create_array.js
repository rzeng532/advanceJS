function array() {
    let arr = Object.create(array.prototype);

    //https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty
    //Object.defineProperty(obj, prop, descriptor)
    Object.defineProperty(arr, 'length', {
        value: 0,
        enumerable: false,
        writable: true
    })

    //for in 得到的是 key，数组中也就是 index
    for(key in arguments) {
        arr[key] = arguments[key];
        arr.length += 1;
        console.log(key + ", " + arr[key]);
    }

    //for of 得到的是value，数组中是 值
    for(value of arguments) {
        console.log(value);
    }

    return arr;
}

array.prototype.push = function(item) {
    this[this.length] = item;
    this.length += 1;

    return this.length;
}

array.prototype.pop = function() {

    this.length -= 1;

    let removedItem = this[this.length];
    delete this[this.length];

    return removedItem;
}

const arrayTest =   array('a', 'b', 'c');
let newLen = arrayTest.push('d');
console.log(newLen);
let removedItem = arrayTest.pop();
