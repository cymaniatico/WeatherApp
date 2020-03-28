import React, { Component } from 'react';
import {connect} from 'react-redux';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
//import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
//import WeatherLocation from './components/WeatherLocation';
import { Grid, Col, Row } from 'react-flexbox-grid';
import PropTypes from 'prop-types';
//import {createStore} from 'redux';
import LocationList from './components/LocationList';
import ForecastExtended from './components/ForecastExtended'
import {setCity} from './actions';
//import {store} from './store';
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



//const store = createStore(()=>{}, 
  //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()); //creacion de store (en carpeta store)

//const setCity = value => ({type: 'setCity', value}); //actionCreator(en carpeta actions)

class App extends Component{

  constructor(){
    super();
    this.state = {city: null};
  }
  handleSelectedLocation = city =>{
    this.setCity({city});//this.setState({city: city});
    console.log(`handleSelectedLocation ${city}`);
    

    this.props.setCity(city); 
  }
  render(){
    const {city} = this.state;
    return (  
      <Grid>
        <Row>
          <AppBar position='sticky'>
            <Toolbar>
            <h1>Weather App</h1>
             </Toolbar>
          </AppBar>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <LocationList 
            cities={cities}
            onSelectedLocation={this.handleSelectedLocation}>
            </LocationList>
          </Col>
          <Col xs={12} md={6}>
            <Paper elevation={4}>
              <div className="details">
                {
                city && //city === null 
                <ForecastExtended city={city}></ForecastExtended>
                }
                
              </div>
            </Paper>
          </Col>
        </Row>
      </Grid>
    );
  }
}

//export default App;

App.propTypes = {
  setCity: PropTypes.func.isRequired,
}

const mapDispatchToProps = dispatch =>({
  setCity: value =>dispatch(setCity(value))
});
const AppConected = connect (null, mapDispatchToProps)(App);

export default AppConected;