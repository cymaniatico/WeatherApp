import React, { Component } from 'react';
//import WeatherLocation from './components/WeatherLocation';
import LocationList from './components/LocationList'
import './App.css';
//import { render } from '@testing-library/react';

const cities = [
  'Santa Marta, co',
  'Tokyo, jp',
  'Paris, fr',
  'Washington, us',
  'Medellin, co',
  'Bogota, co',
];

class App extends Component{
  handleSelectionLocation = city =>{
    console.log("handleSelectionLocation");
  }
  render(){
    return (  
      <div className="App">
        <LocationList 
          cities={cities}
          onSelectedLocation={this.handleSelectionLocation}
        
        />
      </div>
    );
  }
  
}

export default App;
