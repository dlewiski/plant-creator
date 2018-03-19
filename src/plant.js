export class Plant {
  constructor(name) {
    this.health = 50;
    this.height = 0;
    this.fruit = 0
    this.name = name;
  }

  growTimeout() {
    setTimeout(() => {
      // console.log(this);
        this.height++;
        // console.log(this ,'after');
    }, 1000);
  }

  growInterval() {
    setInterval(() => {
      this.health += 5;
      this.height+=2;
      if ((this.health >= 70) && (this.health % 10 == 0)) {
        console.log('here?')
        this.fruit++;
      }
    }, 10000);
  }

  growFruit() {
    if ((this.health >= 70) && (this.health % 10 == 0)) {
      this.fruit++;
    }
  }
}
