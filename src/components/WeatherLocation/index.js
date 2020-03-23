import React, {Component} from 'react';
//import convert from 'convert-units';
import CircularProgress from '@material-ui/core/CircularProgress'
import { PropTypes } from 'prop-types';
import getUrlWeatherByCity from './../../services/getUrlWeatherByCity'
import transportWeather from './../../services/transformWeather'
//import {api_weather} from './../../constants/api_url'
import Location from './Location';
import WeatherData from './WeatherData/';
import './styles.css'


class WeatherLocation extends Component {

    constructor(props){
        super(props);
        const{city} = props;
        this.state ={
            city,
            data: null,
        };
        console.log("constructor");
    }

    componentDidMount() {
        console.log("componentDidMount");
        this.handleUpdateClick();
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate");
        
    }

    
    handleUpdateClick = () =>{
        const api_weather = getUrlWeatherByCity(this.state.city);
        fetch(api_weather).then( resolve => //devuelve promise
            {
                
                return resolve.json();//return promise
            }).then(data=>{
                console.log("handleUpdateClick")
                const newWeather = transportWeather(data);
                console.log(newWeather);
                this.setState({
                    data: newWeather
                });
            }); 

        
        /*this.setState({
            //city: 'Santa Marta',
            data: data2
        });*/
    }

    render=()=>{
        //console.log("render");
        const {onWeatherLocacionClick} = this.props;
        const {city, data}= this.state;
        return( <div className="weatherLocationCont" onClick={onWeatherLocacionClick}>
                    <Location city={city}></Location>
                    {data ? 
                    <WeatherData data={data}></WeatherData> :
                    <CircularProgress size = {50}/>
                    }
                   </div>
        );
    }
   
};
WeatherLocation.propTypes = {
    city: PropTypes.string.isRequired,
    onWeatherLocacionClick: PropTypes.func,
}
export default WeatherLocation;