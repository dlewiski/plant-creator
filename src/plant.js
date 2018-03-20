import $ from 'jquery';

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

  drought() {
    setInterval(()=>{
      this.health -=10;
    }, 1000);
    const new_error = "PLANT IS ABOUT TO DIEEEEEE";
    this.problem = new Error(new_error);
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
    if ((this.health >= 70) && (this.health % 10 == 0)) {
      this.fruit++;
    }
  }

  water() {
    setInterval(() => {
      this.health += 5;
      this.height+=2;
      if ((this.health >= 70) && (this.health % 10 == 0)) {
        console.log('fruit coming?');
        this.fruit++;
      }
    }, 1000);
  }

  checkHealth() {
    setInterval(() => {
      $('.displayHealth').text('The health of '+ this.name +' is currenctly '+ this.health);
    }, 1000);
  }
}
