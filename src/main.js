import { Plant } from './plant.js';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './styles.css';
// import 'bootstrap';

let newPlant = null

$(document).ready(function() {
  $('#new-plant').submit(function(event) {
    event.preventDefault();
    let name = $('#name').val();
    newPlant = new Plant(name);
    newPlant.growTimeout();
    $('#plants').append("<li>" + newPlant.name + "</li>");
  });

  $('#water').click(function() {
    console.log(newPlant)
      newPlant.water();
    });

  $('#drought').click(function() {
    newPlant.drought();
    try {
      const issue = newPlant.problem;
      if (issue instanceof Error) {
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

  // $('#no_drought').click(function() {
  //   newPlant.noDrought();
  //   console.log('drought ended');
  // })

  $('#info').click(function() {
    console.log(newPlant)
  });

  $('#weather').click(function() {

    })
  })






});
