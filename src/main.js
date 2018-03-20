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
      $('.displayHealth').text(`The health of ${newPlant.name} is currenctly ${newPlant.health}.`);
    });

  $('#drought').click(function() {
    newPlant.drought();
    $('.displayHealth').text(`The health of ${newPlant.name} is currenctly ${newPlant.health}.`);
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

  $('#weatherLocation').click(function() {
    let city = $('#location').val();
    $('#location').val("");
    $.ajax({
      url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e53984fe138f468582129bb1286abf8d&units=imperial`,
      type: 'GET',
      data: {
        format: 'json'
      },
      success: function(response) {
        $('.showHumidity').text(`The humidity in ${city} is ${response.main.humidity}%`);
        $('.showTemp').text(`The temperature in Fahrenheit is ${response.main.temp_max}.`);
        $('.clouds').text(`Some kind of cloud info we don't yet understand ${response.clouds.all}`);
        if ((response.main.temp_max >= 60) && (response.main.temp_max <= 80) ) {
          $('.tempMessage').text("mmmm just right");
          newPlant.health += 5;
          $('.displayHealth').text(`The health of ${newPlant.name} is currenctly ${newPlant.health}.`)
        } else {
          $('.tempMessage').text("cold AF");
          newPlant.health -= 5;
          $('.displayHealth').text(`The health of ${newPlant.name} is currenctly ${newPlant.health}.`)
        }
      },
      error: function() {
        $('.errors').text("There was an error processing your request. Please try again.");
      }
    });
  });
});
