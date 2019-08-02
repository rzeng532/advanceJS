//1 concat
//!! return a new array, original array will not be changed.
const oldFriends = ['a', 'b', 'c'];
const newFriends = ['d', 'e', 'f'];

let allFriends = oldFriends.concat(newFriends);
console.log(allFriends);

//2 every
//Used to determine if every element in an array passes a test specified by a given function. 
//Stop while first false appear.
const numbersArray = [12, 13, 14, 9, 16, 17, 18, 19 ,20];

//numCheck result is true or false.
const numCheck = numbersArray.every((num) => {
    //运行到 9 之后便停止运行
    console.log(num);
    return (num >= 10);
});

console.log(numCheck);

//3 fill
//fill array elements with 'undefine' items.

//Below code can't work.
Array(10).map(() => {
  console.log('hello 1');
}) //Can't work

Array(10).fill().map(() => {
    console.log('hello 2');
})

//4 map
//Creates a new array with the result of calling a provided function on every element in the original array.
const mapPreArray = [1,2,3,4,5,6,7,8]

let newArray = mapPreArray.map((num) => { return num * 2})

console.log(newArray);

//5 join
//Turns (or joins) all elements of an array into a string and returns it. 
//By default, when converted into a string, each item in the array will be separated by a comma. 
//You can change that by passing in a custom separator as the first argument.
const joinArray = ['I', 'am', 'Richard']

//output: I,am,Richard, default separate is comma ','
console.log(joinArray.join());
//Use user defined separate -- space ' '
console.log(joinArray.join(' '));

//6 indexOf
//Start from 0, return -1 if not found this item.
console.log(joinArray.indexOf('am')); // 1
console.log(joinArray.indexOf('not found')); // -1


//7 includes
//Determines if a particular value is found in an array.  Just for ES6
//Behavior looks like includes, but it is more intuitive.
console.log(joinArray.includes('am')); //true
console.log(joinArray.includes('not found')); //false

//8 forEach
//Invokes a provided function once for each item in the array. 
//Note .forEach is similar to .map except .map returns a new array, .forEach has no return value.
const forEachArray = [1,2,3,4,5,6]

//Below function will not return value & forEachArray's value will not changed.
//! Difference with .map: Note return new array.
forEachArray.forEach((item) => { return item * 2});
console.log(forEachArray);


//9 find
//Allows you to find the first element in an array which satisfies a test specified by a given function.
const tweets = [
    { id: 1, stars: 13, text: 'Turns out "git reset --hard HEAD^" was a terrible idea.' },
    { id: 2, stars: 87, text: 'Tech conferences are too expensive.' },
    { id: 3, stars: 51, text: 'Clean code is subjective. Optimize for deletion.' },
    { id: 4, stars: 19, text: 'Maybe the real benefit of open source was the friendships we made along the way?' },
  ]

const tweet = tweets.find((t) => t.id === 3)
console.log(tweet) //value of tweets[3]

//10 findIndex
//Similar to .find, but instead of returning the element, it returns the index where the element is located.
const findIndex = tweets.findIndex((t) => t.id === 3)
console.log(findIndex) //2

//11 filter
//Creates a new array after filtering out elements that don’t pass a test specified by a given function.
const popularTweets = tweets.filter((tweet) => {
return tweet.stars > 50
})
console.log(popularTweets);

//12 pop
//Removes the last element from an array and returns it. Favor using .filter instead of .pop as mutations are 👺
//return removed value.
const friends = ['Jake', 'Mikenzi', 'Karl']
const removedFriend = friends.pop()
console.log(removedFriend) // Karl
console.log(friends) // ['Jake', 'Mikenzi']

//13 push
//Adds an item to the end of the array and returns the array’s new length. Favor using .concat instead of .push as mutations are 👺.
//return new length.
friends.push('Jordyn') // 3
console.log(friends) //['Jake', 'Mikenzi', 'Jordyn']

//14 reduce
//Tips:
    //1) Am I transforming an array into another array just by removing some elements? Use .filter
    //2) Am I transforming an array into another array? Use .map
    //3) Am I transforming an array into something other than another array? Use .reduce

//14.1, sum
//two parameters, 1st is function, 2nd is initial value.
//for function, total have 3 values -- initial value, return value & return value.
function sum (arr) {
    return arr.reduce((total, num) => {
      return total + num
    }, 0)
  }
  
sum([1,2,3]) //6

//14.2, convert to something else.
const reduceArray = [
    {name: 'richard', age: 20},
    {name: 'Evan', age: 22},
    {name: 'Allan', age: 30},
]

function getTotal(initValue, item) {
    initValue.total += 1;
    initValue.totalAge += item.age;

    return initValue;
}

let resultValue = reduceArray.reduce(getTotal, {total: 0, totalAge: 0});
console.log(resultValue);

//15 reverse
//Reverse order.
//Note!!!, it will change original array.
oldFriends.reverse();
console.log(oldFriends);
const strArray = ['12', '34', '56'];
console.log(strArray.reverse());

//16 shift
//Remove the first element and return it.
//Favor using .filter instead of .shift as mutations
//!! It will change original array.
const friends1 = ['Karl', 'Mikenzi', 'Jake']
const removedFriend1 = friends1.shift()

console.log(removedFriend1) // Karl
console.log(friends1) // ['Mikenzi', 'Jake']

//17 slice
//Allows you to create a new array from a portion of an existing array. It also doesn’t modify the original array.
const friends2 = ['Jake', 'Mikenzi', 'Jordyn', 'Cash', 'Leo']

//first parameter is start index and second parameter is end index, noninclusive;
const bestFriends = friends2.slice(1,4)
console.log(bestFriends) // ['Mikenzi', 'Jordyn', 'Cash']

//18 some
//Used to determine if any element in an array passes a test specified by a given function.
const ages = [6, 14, 12, 22, 13]

const hasAdultSupervision = ages.some((age) => {
  return age >= 21
})

const canRentCar = ages.some((age) => {
  return age >= 25
})

console.log(hasAdultSupervision) // true
console.log(canRentCar) // false

//19 sort
//It will change original array
//19.1 sort String, don't need function.
const sortArray = ['ddd', 'aaa', 'bbb', 'ccc'];
sortArray.sort();
console.log(sortArray);

//19.2 sort int
const sortAge = [21, 19, 35, 38, 18, 23]
sortAge.sort((a,b) => a - b)

console.log(sortAge) // [18, 19, 21, 23, 35, 38]

//19.3 sort object
const sortUsers = [
    { name: 'Jim', age: 28 },
    { name: 'Alex', age: 32 },
    { name: 'Mikenzi', age: 26 },
    { name: 'Christina', age: 42 },
  ]

sortUsers.sort((a, b) => {return a.age - b.age;});
console.log(sortUsers);

//20 splice
//Allows you to add and or remove items from anywhere inside of an array. It’s mutative so favor using another method that isn’t mutative like .slice, .map, .filter or the spread operator.
//1st param is start index, 2nd is how man want to remove, 3rd and ... is what want to add.
const spliceArray = ['aa', 'bb', 'cc'];
spliceArray.splice(1, 2, 'dd', 'ee');
console.log(spliceArray);

//21 unshift
//Adds one or more elements to the beginning of an array and returns the array’s new length.
const ages = [22,27,29]

ages.unshift(20) // 4
console.log(ages) // [20,22,27,29]

//22 Array.from()
function sumArgs() {
    return Array.from(arguments)
      .reduce((total, ele) => total + ele, 0)
  }
  
  sumArgs(1,2,3) // 6