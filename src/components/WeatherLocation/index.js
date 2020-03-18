import React from 'react';
import Location from './Location';
import WeatherData from './WeatherData/';
import './styles.css'
import {
    CLOUD,
    CLOUDY,
    SUN,
    RAIN,
    SNOW,
    WINDY,
    FOG,
}from './../../constants/weathers'

const data = {
    temperature: 38,
    weatherState: SUN,
    humidity: 10,
    wind: '12 m/s',
}
const WeatherLocation = () => (
    <div className="weatherLocationCont">
    <Location city={"Santa Marta"}></Location>
    <WeatherData data={data}></WeatherData>
    </div>
);

export default WeatherLocation;