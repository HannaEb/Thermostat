$(document).ready(function(){
  var thermostat = new Thermostat();
  updateTemperature();

  displayWeather('London');

  $('#select-city').submit(function(event){
    event.preventDefault();
    var city = $('#current-city').val();
    displayWeather(city);
  });

  $('#increase-temperature').click(function(){
    thermostat.increaseTemperature();
    updateTemperature();
  });

  $('#decrease-temperature').click(function(){
    thermostat.decreaseTemperature();
    updateTemperature();
  });

  $('#reset-temperature').click(function(){
    thermostat.resetTemperature();
    updateTemperature();
  });

  $('#powersaving-on').click(function(){
    thermostat.switchPowerSavingModeOn();
    $('#powersaving').text('on');
    updateTemperature();
  });

  $('#powersaving-off').click(function(){
    thermostat.switchPowerSavingModeOff();
    $('#powersaving').text('off');
    updateTemperature();
  });

  function updateTemperature(){
    $('#temperature').text(thermostat.temperature);
    $('#temperature').attr('class', thermostat.energyUsage());
  };

  function displayWeather(city) {
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
    var token = '&appid=8ea59f6a2160f32ff13f6601c3ef971d';
    var units = '&units=metric';
    $.get(url + token + units, function(data){
      $('#current-temperature').text(data.main.temp);
    });
  };
});
