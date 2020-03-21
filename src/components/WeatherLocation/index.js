import React, {Component} from 'react';
//import convert from 'convert-units';
import transportWeather from './../../services/transformWeather'
import {api_weather} from './../../constants/api_url'
import Location from './Location';
import WeatherData from './WeatherData/';
import './styles.css'
import {
    CLOUD,
    CLOUDY,
    SUN,
    RAIN,
    SNOW,
    FOG,
}from './../../constants/weathers'



const data = {
    temperature: 38,
    weatherState: SUN,
    humidity: 10,
    wind: '12 m/s',
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
        fetch(api_weather).then( resolve => //devuelve promise
            {
                
                return resolve.json();//return promise
            }).then(data=>{
                const newWeather = transportWeather(data);
                console.log(newWeather);
                this.setState({
                    data: newWeather
                });
            }); 

        console.log("actualizado");
        /*this.setState({
            //city: 'Santa Marta',
            data: data2
        });*/
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