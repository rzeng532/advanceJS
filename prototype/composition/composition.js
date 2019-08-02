
//方法1
// const eater = (state) => ({
//     eat(amount) {
//         console.log(`${state.name} is eating`);
//         state.energy += amount;
//     }
// })

//方法2
function eat(amount) {
    console.log(`${this.name} is eating`);
    this.energy += amount;
}

const sleeper = (state) => ({
    sleep(length) {
        console.log(`${state.name} is sleeping`);
        state.energy += length;
    }
})

const player = (state) => ({
    play() {
      console.log(`${state.name} is playing.`)
      state.energy -= length
    }
  })
  
  const barker = (state) => ({
    bark() {
      console.log('Woof Woof!')
      state.energy -= .1
    }
  })
  
  const meower = (state) => ({
    meow() {
      console.log('Meow!')
      state.energy -= .1
    }
  })
  
  const adopter = (state) => ({
    adopt(pet) {
      state.pets.push(pet)
    }
  })
  
  const friender = (state) => ({
    befriend(friend) {
      state.friends.push(friend)
    }
  })

  function Dog(name, energy, breed) {
    //this 如果不和 new 匹配，直接返回Dog，则所有Dog 实例公用一个this
    this.name = name;
    this.energy = energy;
    this.breed = breed;

    /*
     * Object.assign 是一个ES6新语法，第一个参数是目标Object，将后面的内容集成到目标Object上面。
     * 如果遇到同名的属性/方法，后合并的覆盖之前的。
     * assign 后面的 parameters 参数需要可枚举类型，例如{key : value}.
     * {eat}, sleeper(this) 这两种方式本质都是提供一个 {}, key 就是函数名，value就是函数本身。
     */
    return Object.assign(this, {eat}, sleeper(this), player(this), barker(this));
  }

  let cai = Dog("caiquan", 100, "bone");
  cai.eat(10);

  let cai2 = Dog("caiquan2", 100, "bone");
  cai2.eat(15);
  cai.eat(1);//输出： caiquan2 is eating

  //正确方式：
  let cai3 = new Dog("caiquan3", 100, "bone");
  cai3.eat(1);
  cai.eat(1);