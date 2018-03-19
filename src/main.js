import { Plant } from './plant.js';
import $ from 'jquery';
// import './styles.css';

$(document).ready(function() {
  $('#new-plant').submit(function(event) {
    event.preventDefault();
    let name = $('#name').val();
    let newPlant = new Plant(name);
    newPlant.growTimeout();


    let problem = null;
    // function plantLife() {
    //   this.health = 0;
    //   setInterval(() => {
    //     const error = "PLANT IS ABOUT TO DIEEEEEE";
    //     this.health -= 5;
    //     this.height -=1;
    //     console.log(this.health, 'top');
    //     if (this.health < 10) {
    //       console.log(this.health, ' here?');
    //       return problem = new Error(error);
    //     }
    //   }, 2000);
    // }

    newPlant.plantLife();
    console.log(newPlant);
    try {
      // debugger;
      // const issue = newPlant.plantLife();
      if (newPlant.problem instanceof Error) {
        console.log('boom');
        console.log(newPlant.problem.message, 22);
        throw Error('plant is dying');
      } else {
        console.log('plant not dying no error');
      }
    } catch (error) {
      console.error(`Problem here is the error message!!!! ${error.message}`);
    }



  });
});
