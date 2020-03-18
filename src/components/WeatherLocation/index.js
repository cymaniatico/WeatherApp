import React, {Component} from 'react';
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

const data2 = {
    temperature: 20,
    weatherState: RAIN,
    humidity: 100,
    wind: '40 m/s',
}
class WeatherLocation extends Component {

    constructor(){
        super();
        this.state ={
            city: 'Santa Marta',
            data: data,
        };
    }

    handleUpdateClick = () =>{
        console.log("actualizado");
        this.setState({
            city: 'Fundacion',
            data: data2
        });
    }
    render(){
        const {city, data}= this.state;
        return( <div className="weatherLocationCont">
                    <Location city={city}></Location>
                    <WeatherData data={data}></WeatherData>
                    <button onClick={this.handleUpdateClick}>Actualizar</button>
                </div>
        );
    }
   
};

export default WeatherLocation;