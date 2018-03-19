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

  plantLife() {
    setInterval(() => {
      const error = "PLANT IS ABOUT TO DIEEEEEE";
      this.health -= 5;
      this.height -=1;
      if (this.health < 10) {
        return new Error(error);
        console.log('here?')
      }
    }, 20000);
  }

//   try {
//     const issue = plantLife()
//     if (issue instanceof Error) {
//       console.log(issue.message);
//       throw Error('plant is dying')
//     } else {
//       console.log('plant not dying no error');
//     }
//     catch (error) {
//     console.error(`Problem here is the error message ${error.message}`)
//   }
// }

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
        console.log('here?')
        this.fruit++;
      }
    }, 10000);
  }
}
