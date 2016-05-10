'use strict';

function Thermostat(){
  this.MINIMUM_TEMPERATURE = 10;
  this.MAXIMUM_TEMP_PSM_ON = 25;
  this.MAXIMUM_TEMP_PSM_OFF = 32;
  this.MEDIUM_ENERGY_USAGE_LIMIT = 18;
  this.DEFAULT_TEMPERATURE = 20;
  this.temperature = this.DEFAULT_TEMPERATURE;
  this.powerSavingMode = true;
};

Thermostat.prototype.getCurrentTemperature = function(){
  return this.temperature;
};

Thermostat.prototype.increaseTemperature = function(){
  if (this.isMaximumTemperature()) {
    return;
  };
  this.temperature += 1;
};

Thermostat.prototype.decreaseTemperature = function(){
  if (this.isMinimumTemperature()) {
    return;
  };
  this.temperature -= 1;
};

Thermostat.prototype.isMinimumTemperature = function(){
  return this.temperature === this.MINIMUM_TEMPERATURE;
};

Thermostat.prototype.isMaximumTemperature = function(){
  if (this.isPowerSavingModeOn() === false) {
    return this.temperature === this.MAXIMUM_TEMP_PSM_OFF;
  };
  return this.temperature === this.MAXIMUM_TEMP_PSM_ON;
};

Thermostat.prototype.isPowerSavingModeOn = function(){
  return this.powerSavingMode === true;
};

Thermostat.prototype.switchPowerSavingModeOff = function(){
  this.powerSavingMode = false;
};

Thermostat.prototype.switchPowerSavingModeOn = function(){
  this.powerSavingMode = true;
};

Thermostat.prototype.resetTemperature = function(){
  this.temperature = this.DEFAULT_TEMPERATURE;
};

Thermostat.prototype.energyUsage = function(){
  if (this.temperature < this.MEDIUM_ENERGY_USAGE_LIMIT){
    return 'low-usage';
  };
  if (this.temperature >= this.MEDIUM_ENERGY_USAGE_LIMIT && this.temperature <= this.MAXIMUM_TEMP_PSM_ON){
    return 'medium-usage';
  };
  return 'high-usage';
};
