export class Plant {
  constructor(name) {
    this.health = 50;
    this.height = 0;
    this.fruit = 0;
    this.name = name;
    this.problem = null;
  }

  growTimeout() {
    setTimeout(() => {
      // console.log(this);
      this.height++;
      console.log(this ,'after');
    }, 1000);
  }

  plantLife() {
    this.health = 0;
    const new_error = "PLANT IS ABOUT TO DIEEEEEE";
    this.problem = new Error(new_error);
    // setInterval(() => {
    //   this.health -= 5;
    //   this.height -=1;
    //   console.log(this.health, 'top');
    //   // if (this.health < 10) {
    //     console.log(this.health, ' here?');
    //     return this.problem = new Error(error);
    //   // }
    // }, 2000);
  }

  growFruit() {
    if ((this.health >= 70) && (this.health % 10 == 0)) {
      this.fruit++;
    }
  }

  water() {
    setInterval(() => {
      this.health += 5;
      this.height+=2;
      if ((this.health >= 70) && (this.health % 10 == 0)) {
        console.log('here?');
        this.fruit++;
      }
    }, 10000);
  }
}
