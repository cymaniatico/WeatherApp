import React from 'react';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature';
import {
    CLOUD,
    CLOUDY,
    SUN,
    RAIN,
    SNOW,
    WINDY,
    FOG,
}from './../../../constants/weathers'
import './styles.css';

const WeatherData = ({data: {temperature, weatherState, humidity, wind}}) => (
    //const {temperature, weatherState, humidity, wind} = data;
    <div className="weatherDataCont" >
        <WeatherTemperature 
            temperature={temperature} 
            weatherState={weatherState}
        />
        <WeatherExtraInfo humidity = {humidity} wind={wind} />
    </div>
);

export default WeatherData;