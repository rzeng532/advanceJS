class Car {
    // https://github.com/tc39/proposal-private-fields/blob/master/FAQ.md
    //https://github.com/babel/proposals/issues/12
    #milesDriven = 0;
    drive(distance) {
      this.#milesDriven += distance;
    }
    getMilesDriven() {
      return this.#milesDriven;
    }
  }
  