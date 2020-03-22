import React from 'react';
import WeatherLocation from './WeatherLocation'

const LocationList = () => (
    <div>
        <WeatherLocation city = "Santa Marta, co"></WeatherLocation>
        <WeatherLocation city = "Barranquilla, co"></WeatherLocation>
        <WeatherLocation city = "Bogota, co"></WeatherLocation>
    </div>
);

export default LocationList;