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
    let problem = null;
    newPlant.plantLife();
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

$('#water').click(function() {
  console.log(newPlant)
    newPlant.water();
  });

  
});
