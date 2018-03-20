import $ from 'jquery';

export class Plant {
  constructor(name) {
    this.health = 2000000;
    this.height = 0;
    this.fruit = 0;
    this.name = name;
    this.problem = null;
  }

  growTimeout() {
    setTimeout(() => {
      // console.log(this);
      this.height+=2000;
      console.log(this ,'after');
    }, 1000);
  }

  drought() {
    setInterval(()=>{
      this.health -=10000;
    }, 20000);
    const new_error = "PLANT IS ABOUT TO DIEEEEEE";
    this.problem = new Error(new_error);
  }

  plantLife() {
    setInterval(()=>{
      this.health -=1;
    }, 1);
  }

  // noDrought(){
  //   let theDrought=drought() {
  //     setInterval(()=>{
  //       this.health -=10;
  //     }, 1000);
  //     const new_error = "PLANT IS ABOUT TO DIEEEEEE";
  //     this.problem = new Error(new_error);
  //   }
  //   clearInterval(drought());
  // }

  growFruit() {
    setInterval(() => {
    if ((this.health >= 2010000) && (this.health % 1 == 0)) {
      this.fruit++;
      }
    },10000);
  }

  water() {
      this.health += 5000;
      this.height +=2000;
      if ((this.health >= 2010000) && (this.health % 1 == 0)) {
        console.log('fruit coming?');
        this.fruit++;
    }
  }

  checkHealth() {
    setInterval(() => {
      $('.displayHealth').text('The health of '+ this.name +' is currenctly '+ this.health);
    }, 1);
  }

  fruitBasket() {
    setInterval(() => {
      $('.fruit-basket').text(`You have this many ${this.name} fruit ${this.fruit} !`)
    }, 1000);
  }



}
