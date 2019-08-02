const user = {
    name: 'Tyler',
    age: 27,
    languages: ['JavaScript', 'Ruby', 'Python'],
    greet() {
      const hello = `Hello, my name is ${this.name} and I know`
  
      //str - total, must
      //lang - current, must
      //i - index, option
      const langs = this.languages.reduce((str, lang, i) => {
        if (i === this.languages.length - 1) {
          return `${str} and ${lang}.`
        }
  
        return `${str} ${lang},`
      }, "")
  
      console.log(langs);
      //alert(hello + langs)
    }
  }

  user.greet();